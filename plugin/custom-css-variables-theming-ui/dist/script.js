$(document).ready(function () {
  // Color Picker Tool Js
  const dynamicInputs = document.querySelectorAll('input.input-color-picker');
  
  const handleThemeUpdate = (cssVars) => {
    const root = document.querySelector(':root');
    const keys = Object.keys(cssVars);
    keys.forEach(key => {
      root.style.setProperty(key, cssVars[key]);
    });
  }

  
  dynamicInputs.forEach((item) => {
    item.addEventListener('input', (e) => {
      const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
      console.log(cssPropName)
      handleThemeUpdate({
        [cssPropName]: e.target.value
      });
    });
  });
  
});
