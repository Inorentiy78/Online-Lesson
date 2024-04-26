using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.ApplicationDbContext;
using WebApplication1.Models;

[ApiController]
[Route("api/[controller]/[Action]")]
public class UserController : ControllerBase
{
    private readonly AppDbContext _context;

    public UserController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/Todo
    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        return await _context.Users.ToListAsync();
    }

    // GET: api/Todo/5
    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUser(long id)
    {
        var userItem = await _context.Users.FindAsync(id);

        if (userItem == null)
        {
            return NotFound();
        }

        return userItem;
    }

    // POST: api/Todo
    [HttpPost]
    public async Task<ActionResult<User>> PostUser(User userItem)
    {
        _context.Users.Add(userItem);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetUser), new { id = userItem.Id }, userItem);
    }

    // PUT: api/Todo/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutUser(long id, User userItem)
    {
        if (id != userItem.Id)
        {
            return BadRequest();
        }

        _context.Entry(userItem).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!UserExists(userItem.Username)) 
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }


    // DELETE: api/Todo/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(long id)
    {
        var userItem = await _context.Users.FindAsync(id);
        if (userItem == null)
        {
            return NotFound();
        }

        _context.Users.Remove(userItem);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    // POST: api/User/Register
    [HttpPost("Register")]
    public async Task<IActionResult> Register([FromBody] UserRegisterModel model)
    {
        if (UserExists(model.Username))
        {
            return Conflict("Username already exists");
        }

        var user = new User
        {
            Username = model.Username,
            Fio = model.Fio,
            Age = model.Age,
            Password = model.Password
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }

    // POST: api/User/Login
    [HttpPost("Login")]
    public async Task<IActionResult> Login([FromBody] UserLoginModel model)
    {
        var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == model.Username && u.Password == model.Password);

        if (existingUser == null)
        {
            return NotFound("Invalid username or password");
        }

        return Ok("Welcome!");
    }


    private bool UserExists(string username)
    {
        return _context.Users.Any(u => u.Username == username);
    }
}