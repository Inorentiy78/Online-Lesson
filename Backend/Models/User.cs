namespace WebApplication1.Models
{
    public class BaseEntity
    {
        public long Id { get; set; }
    }
    public class User : BaseEntity 
    { 
        public string Username {  get; set; }
        public string Fio { get; set; }
        public int Age { get; set; }

        public string Password { get; set; }
    }

    public class UserRegisterModel
    {
        public string Username { get; set; }
        public string Fio { get; set; }
        public int Age { get; set; }
        public string Password { get; set; }
    }

    public class UserLoginModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

}
