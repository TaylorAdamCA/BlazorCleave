# BlazorCleave
A Blazor class library that wraps the functionality of Cleave.js.

# Usage

1. In a Blazor Server or Blazor WebAssembly project, add a reference to the `BlazorCleave` package.

2. In your `_Imports.razor` file, add the following statements:

```razor
@using BlazorCleave
@using BlazorCleave.Data
```

3. In your `_Host.cshtml` (for Blazor Server) or `index.html` (for Blazor WebAssembly) file, add the following tags somewhere *before* the reference to the Blazor `.js` file:

```html
    <script src="_content/BlazorCleave/BlazorCleave.js"></script>
    <script src="_content/BlazorCleave/cleave-phone.i18n.js"></script>
```

4. If you want to add some default styling, in your `_Host.cshtml` (for Blazor Server) or `index.html` (for Blazor WebAssembly) file
add the following after your current stylesheet link:

```html
    <link href="_content/BlazorCleave/style.css" rel="stylesheet" />
```

You're now ready to use the package. For example, inside a `.razor` file, 

```html
//Time formatting
<Cleave Placeholder="hh:mm" TimeFormat="@( new TimeFormat{
        Format = new[] { 'h', 'm' }
    })" InputType="InputType.Time" />

// Date formatting
<Cleave Placeholder="YYYY/MM/DD" DateFormat="@(new DateFormat{
        Delimiter = '/',
        Format = new char[] { 'Y', 'm', 'd' }
    })" InputType="InputType.Date" />

// Phone number formatting
<Cleave Placeholder="Phone Number" CountryCode="CountryCode.CA" InputType="InputType.PhoneNumber" />

// Credit card formatting
<Cleave Placeholder="Credit Card" InputType="InputType.CreditCard" />

// Numeral formatting
<Cleave Placeholder="Numeral formatting" InputType="NumeralTypes.Type.Thousand" />
```


# Notes
This is still a WIP, although it does work well, there is always improvements to be made.

Please contribute if you have any suggestions/reccomendations.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


