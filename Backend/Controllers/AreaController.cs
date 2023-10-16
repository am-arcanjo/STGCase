using Microsoft.AspNetCore.Mvc;

[Route("api/getarea")]
[ApiController]
public class AreaController : ControllerBase
{
    // Controller actions will be defined here
}

[HttpGet]
public ActionResult<IEnumerable<Item>> Get()
{
    // Implement logic to retrieve a list of items
}

[HttpGet("{id}")]
public ActionResult<Item> Get(int id)
{
    // Implement logic to retrieve a single item by ID
}

[HttpPost]
public ActionResult<Item> Post([FromBody] Item newItem)
{
    // Implement logic to create a new item
}

[HttpPut("{id}")]
public IActionResult Put(int id, [FromBody] Item updatedItem)
{
    // Implement logic to update an existing item
}

[HttpDelete("{id}")]
public IActionResult Delete(int id)
{
    // Implement logic to delete an item by ID
}