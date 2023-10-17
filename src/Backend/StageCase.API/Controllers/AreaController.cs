using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using StageCase.API.Database;
using System;
using System.Collections.Generic;
using System.Linq;


namespace StageCase.API.Controllers
{
    [Route("api/getarea")]
    [ApiController]
    public class AreaController : ControllerBase
    {
        private readonly AreaDbContext _context;

        public AreaController(AreaDbContext context)
        {
            _context = context;
        }

        [EnableCors]
        [HttpGet]
        public ActionResult<IEnumerable<Area>> Get()
        {
            var areas = _context.Area.ToList();
            return Ok(areas);
        }

        [EnableCors]
        [HttpGet("{name}")]
        public ActionResult<Area> Get(string name)
        {
            var area = _context.Area.FirstOrDefault(a => a.Name == name);
            if (area == null)
            {
                return NotFound();
            }
            return Ok(area);
        }

        [EnableCors]
        [HttpPost]
        public ActionResult<Area> Post([FromBody] Area newArea)
        {
            _context.Area.Add(newArea);
            _context.SaveChanges();
            return CreatedAtAction("Get", new { name = newArea.Name }, newArea);
        }

        [EnableCors]
        [HttpPut("{name}")]
        public IActionResult Put(string name, [FromBody] Area updatedArea)
        {
            var existingArea = _context.Area.FirstOrDefault(n => n.Name == name);
            if (existingArea == null)
            {
                return NotFound();
            }

            existingArea.Name = updatedArea.Name;
            existingArea.Description = updatedArea.Description;
            _context.SaveChanges();
            return NoContent();
        }

        [EnableCors]
        [HttpDelete("{name}")]
        public IActionResult Delete(string name)
        {
            var area = _context.Area.FirstOrDefault(n => n.Name == name);
            if (area == null)
            {
                return NotFound();
            }

            _context.Area.Remove(area);
            _context.SaveChanges();
            return NoContent();
        }
    }
}

