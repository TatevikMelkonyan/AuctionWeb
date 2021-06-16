using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Auction.Logic.Models
{
    public class PaginationResult<T> where T : class
    {
        public List<T> Items { get; set; }
        public int Length { get; set; }

        public PaginationResult()
        { }

        public PaginationResult(List<T> items, int length)
        {
            Items = items;
            Length = length;
        }
    }
}
