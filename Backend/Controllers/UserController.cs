using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using System;
using System.Linq;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IConfiguration _configuration;

    public UserController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpPost("SendMail")]
    public async Task<IActionResult> SendMail([FromBody] SendMailModel model)
    {
        try
        {
            var randomUsername = GenerateRandomString(5);
            var randomPassword = GenerateRandomString(8);

            var smtpServer = _configuration.GetValue<string>("SmtpServer");
            var smtpPort = _configuration.GetValue<int>("SmtpPort");
            var smtpUsername = _configuration.GetValue<string>("SmtpUsername");
            var smtpPassword = _configuration.GetValue<string>("SmtpPassword");

            await SendEmail(model.Email, randomUsername, randomPassword, smtpServer, smtpPort, smtpUsername, smtpPassword);

            return Ok("Почта успешно отправлена");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Ошибка при отправке почты: {ex.Message}");
        }
    }

    [HttpGet("ReceiveData")]
    public IActionResult ReceiveData([FromQuery] string email)
    {
        try
        {
            Console.WriteLine($"Получен почтовый адрес: {email}");
            return Ok($"Получен почтовый адрес: {email}");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Ошибка при получении данных: {ex.Message}");
        }
    }

    [HttpPost("ReceiveUserData")]
    public IActionResult ReceiveUserData([FromBody] UserDataModel userData)
    {
        try
        {
            Console.WriteLine($"Получены данные пользователя: Имя - {userData.Name}, Почта - {userData.Email}, Номер - {userData.PhoneNumber}");

            return Ok($"Получены данные пользователя: Имя - {userData.Name}, Почта - {userData.Email}, Номер - {userData.PhoneNumber}");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Ошибка при получении данных: {ex.Message}");
        }
    }

    private async Task SendEmail(string email, string login, string password, string smtpServer, int smtpPort, string smtpUsername, string smtpPassword)
    {
        using (var client = new SmtpClient())
        {
            client.ServerCertificateValidationCallback = (s, c, h, e) => true;
            await client.ConnectAsync(smtpServer, smtpPort, SecureSocketOptions.StartTls);
            await client.AuthenticateAsync(new NetworkCredential(smtpUsername, smtpPassword));

            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Название вашего приложения", smtpUsername));
            message.To.Add(new MailboxAddress("Имя получателя", email));
            message.Subject = "Информация о логине и пароле для входа в сайт Онлайн курсы";
            message.Body = new TextPart("plain")
            {
                Text = $"Логин: {login}\nПароль: {password}\n\nдля входа в сайт Онлайн курсы"
            };

            await client.SendAsync(message);
            await client.DisconnectAsync(true);
        }
    }

    private string GenerateRandomString(int length)
    {
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var random = new Random();
        return new string(Enumerable.Repeat(chars, length)
          .Select(s => s[random.Next(s.Length)]).ToArray());
    }
}

public class SendMailModel
{
    public string Email { get; set; }
}

public class UserDataModel
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
}
