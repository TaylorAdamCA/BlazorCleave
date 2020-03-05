using System;
using System.Collections.Generic;
using System.Text;

namespace BlazorCleave.Data
{
    public static class NumeralTypes
    {
        /// <summary>
        /// The different numeral types
        /// </summary>
        public enum Type
        {
            Thousand,
            Lakh,
            Wan
        }

        public static string GetTypeString(Type type)
        {
            switch (type)
            {
                case Type.Thousand:
                    return "thousand";

                case Type.Lakh:
                    return "lakh";

                case Type.Wan:
                    return "wan";
            }

            return "thousand";
        }
    }
}