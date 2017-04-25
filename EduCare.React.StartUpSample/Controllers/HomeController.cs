using Microsoft.AspNetCore.Mvc;

namespace EduCare.React.StartUpSample.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
