using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CalculateController : ControllerBase
    {
        [HttpGet("plus/{a},{b}")]
        public IActionResult Add(double a, double b)
        {
            double result = a + b;
            return Ok(result);
        }

        [HttpGet("minus/{a},{b}")]
        public IActionResult Subtract(double a, double b)
        {
            double result = a - b;
            return Ok(result);
        }

        [HttpGet("multiply/{a},{b}")]
        public IActionResult Multiply(double a, double b)
        {
            double result = a * b;
            return Ok(result);
        }

        [HttpGet("divide/{a},{b}")]
        public IActionResult Divide(double a, double b)
        {
            if (b == 0)
            {
                return BadRequest("Division by zero is not allowed.");
            }

            double result = a / b;
            return Ok(result);
        }

        [HttpGet("universal")]
        public IActionResult Universal(string expression)
        {
            DataTable dt = new DataTable();
            var result = dt.Compute(expression, "");

            return Ok(new { result });
        }
    }

    public class CalculationRequest
    {
        public double A { get; set; }
        public double B { get; set; }
        public string Operator { get; set; }
    }
}
