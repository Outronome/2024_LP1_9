// Ir para o topo 
const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    })
}
// Função que define o tema no localStorage e aplica na página
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// Função que alterna entre o tema claro e escuro
function toggleTheme() {
    const newTheme = localStorage.getItem('theme') === 'theme-dark' ? 'theme-light' : 'theme-dark';
    setTheme(newTheme);
    // Atualiza o checkbox com o estado do tema
    document.getElementById('theme-checkbox').checked = (newTheme === 'theme-dark');
}
// Função que é chamada ao carregar a página para aplicar o tema salvo
document.addEventListener('DOMContentLoaded', function () {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('theme-checkbox').checked = true; // Marca o checkbox
    } else {
        setTheme('theme-light');
        document.getElementById('theme-checkbox').checked = false; // Desmarca o checkbox
    }
});
