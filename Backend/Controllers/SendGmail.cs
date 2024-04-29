using Google.Apis.Auth.OAuth2;
using Google.Apis.Gmail.v1;
using Google.Apis.Gmail.v1.Data;
using Google.Apis.Services;
using System;
using System.IO;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MimeKit;

namespace WebApplication1
{
    public partial class SendGMail
    {
        private readonly string keyFilePath = "C:\\Users\\Элина\\Downloads\\csharpwebapireactjs-15d11d98f66c.json";

        public async Task<Message> SendEmailAsync(string sender, string recipient, string subject, string body)
        {
            GoogleCredential credential;
            using (var stream = new FileStream(keyFilePath, FileMode.Open, FileAccess.Read))
            {
                credential = GoogleCredential.FromStream(stream)
                    .CreateScoped(GmailService.Scope.GmailSend);
            }

            var service = new GmailService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = "csharpwebapireactjs",
            });

            var gmailMessage = new Message
            {
                Raw = Base64UrlEncode(CreateMimeMessage(sender, recipient, subject, body))
            };

            try
            {
                Console.WriteLine("Start Send");
                var sentMessage = await service.Users.Messages.Send(gmailMessage, "me").ExecuteAsync();
                Console.WriteLine("Stop Send");
                return sentMessage;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred: {ex.Message}");
                return null;
            }
        }

        public MimeMessage CreateMimeMessage(string sender, string recipient, string subject, string body)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Sender Name", sender)); // Change "Sender Name" to your sender's name
            message.To.Add(new MailboxAddress("Recipient Name", recipient)); // Change "Recipient Name" to recipient's name
            message.Subject = subject;

            var bodyBuilder = new BodyBuilder();
            bodyBuilder.TextBody = body;

            message.Body = bodyBuilder.ToMessageBody();

            return message;
        }

        public string Base64UrlEncode(MimeMessage message)
        {
            using (var memory = new MemoryStream())
            {
                message.WriteTo(memory);
                var bytes = memory.ToArray();
                return Convert.ToBase64String(bytes)
                    .Replace('+', '-')
                    .Replace('/', '_')
                    .Replace("=", "");
            }
        }
    }
}

