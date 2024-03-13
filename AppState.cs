namespace BlazorClassBasedThemeChanger;

public class AppState
{
    public string Theme { get; private set; } = "light";
    
    public void SetTheme(string theme)
    {
        Theme = theme;
    }
}