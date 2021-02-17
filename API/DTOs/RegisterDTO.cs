using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDTO
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [MaxLength(8)]
        [MinLength(4)]
        public string Password { get; set; }
    }
}