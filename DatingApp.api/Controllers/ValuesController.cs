using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.api.Data;
using DatingApp.api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;

        public ValuesController(DataContext context)
        {
            this._context = context;

        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Value>>> GetValues()
        {
            var values = await _context.Values.ToListAsync();
            
            return values;
        }
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ActionResult<Value>> GetValue(int id)
        {
            var value = await _context.Values.FindAsync(id);
            return value; 
        }
        /* [HttpDelete("{id}")]
        public ActionResult DeleteValue(int id)
        {
           return  _context.Values.Remove(id);
        } */
    }
}