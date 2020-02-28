using System;
using System.Collections.Generic;
using System.Text;

namespace BlazorCleave.Data
{
    public class DateFormat
    {
        /// <summary>
        /// The format for the date, y can be capital for YYYY,or lowercase for YY, but m and d can only be lowercase
        /// </summary>
        public char[] Format { get; set; } = new char[] { 'Y', 'm', 'd' };

        /// <summary>
        /// The delimiter
        /// </summary>
        public char Delimiter { get; set; } = '/';
    }
}