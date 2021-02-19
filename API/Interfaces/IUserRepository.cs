using System.Threading.Tasks;
using API.Entities;
using System.Collections.Generic;
using API.DTOs;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void UpdateProfile(AppUser user);
        Task<bool> SaveAllChangesAsync();
        Task<IEnumerable<AppUser>> GetUsersAsync();
        Task<AppUser> GetUserByIdAsync(int id);
        Task<AppUser> GetUserByUserNameAsync(string userName);
        Task<IEnumerable<MemberDTO>> GetMembersAsync();
        Task<MemberDTO> GetMemberAsync(string username);

    }
}