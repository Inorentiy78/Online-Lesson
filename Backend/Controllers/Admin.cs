using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Admin
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminCredentialsController : ControllerBase
    {
        private readonly List<AdminCredentials> _adminCredentials;

        public AdminCredentialsController()
        {
            _adminCredentials = new List<AdminCredentials>();
            // Добавляем начальные учетные данные администратора
            _adminCredentials.Add(new AdminCredentials { Username = "admin", Password = "adminpassword" });
        }

        // POST api/AdminCredentials/AddAdminCredentials
        [HttpPost("AddAdminCredentials")]
        public IActionResult AddAdminCredentials([FromBody] AdminCredentials credentials)
        {
            _adminCredentials.Add(credentials);
            return Ok("Учетные данные администратора добавлены успешно");
        }

        // GET api/AdminCredentials/GetAdminCredentials
        [HttpGet("GetAdminCredentials")]
        public IActionResult GetAdminCredentials()
        {
            return Ok(_adminCredentials);
        }

        // PUT api/AdminCredentials/EditAdminCredentials/{username}
        [HttpPut("EditAdminCredentials/{username}")]
        public IActionResult EditAdminCredentials(string username, [FromBody] AdminCredentials newCredentials)
        {
            var admin = _adminCredentials.FirstOrDefault(a => a.Username == username);
            if (admin == null)
            {
                return NotFound("Учетные данные администратора не найдены");
            }

            admin.Username = newCredentials.Username;
            admin.Password = newCredentials.Password;

            return Ok("Учетные данные администратора успешно изменены");
        }

        // DELETE api/AdminCredentials/DeleteAdminCredentials/{username}
        [HttpDelete("DeleteAdminCredentials/{username}")]
        public IActionResult DeleteAdminCredentials(string username)
        {
            var admin = _adminCredentials.FirstOrDefault(a => a.Username == username);
            if (admin == null)
            {
                return NotFound("Учетные данные администратора не найдены");
            }

            _adminCredentials.Remove(admin);
            return Ok("Учетные данные администратора успешно удалены");
        }
    }

    public class AdminCredentials
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
