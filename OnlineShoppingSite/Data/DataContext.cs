using Microsoft.EntityFrameworkCore;
using OnlineShoppingSite.Entities;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShoppingSite.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions options ):base(options)
        {
                
        }

        public DbSet<AppUser> Users { get; set; }
    }
}
