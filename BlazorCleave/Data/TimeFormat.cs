using System;
using System.Collections.Generic;
using System.Text;

namespace BlazorCleave.Data
{
    public class TimeFormat
    {
        /// <summary>
        /// The format for the time input, must be lowercase characters
        /// </summary>
        public char[] Format { get; set; } = new char[] { 'h', 'm', 's' };
    }
}