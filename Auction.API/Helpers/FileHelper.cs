using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Auction.API.Helpers
{
    public static class FileHelper
    {
        private static readonly string _imageFolderName = "Images";
        public static IWebHostEnvironment HostingEnvironment { get; set; }
        public static string GetLinkImage(string fileName)
        {
            return "/" + _imageFolderName + "/" + fileName;
        }
        private static string GetPath(string fileName)
        {
            return Path.Combine(Path.Combine(HostingEnvironment.WebRootPath, FileHelper._imageFolderName), fileName);
        }
    }
}
