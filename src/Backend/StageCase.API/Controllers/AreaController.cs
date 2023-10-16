using Microsoft.AspNetCore.Mvc;
using StageCase.API.Database;
using System;
using System.Collections.Generic;
using System.Linq;


namespace StageCase.API 
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

        [HttpGet]
        public ActionResult<IEnumerable<Area>> Get()
        {
            var areas = _context.Area.ToList();
            return Ok(areas);
        }

        [HttpGet("{name}")]
        public ActionResult<Area> Get(string name)
        {
            var name = _context.Area.FirstOrDefault(n => n.Nome == name);
            if (name == null)
            {
                return NotFound();
            }
            return Ok(name);
        }

        [HttpPost]
        public ActionResult<Area> Post([FromBody] Area newArea)
        {
            _context.Areas.Add(newArea);
            _context.SaveChanges();
            return CreatedAtAction("Get", new { name = newArea.Name }, newArea);
        }

        [HttpPut("{name}")]
        public IActionResult Put(string name, [FromBody] Area updatedArea)
        {
            var existingArea = _context.Areas.FirstOrDefault(n => n.Nome == name);
            if (existingArea == null)
            {
                return NotFound();
            }

            existingItem.Property1 = updatedItem.Property1;
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{name}")]
        public IActionResult Delete(string name)
        {
            var area = _context.Areas.FirstOrDefault(n => n.Nome == name);
            if (area == null)
            {
                return NotFound();
            }

            _context.Areas.Remove(area);
            _context.SaveChanges();
            return NoContent();
        }
    }
}

