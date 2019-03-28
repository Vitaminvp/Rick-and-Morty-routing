export const isLogged = _ => {
    return localStorage.getItem('user');
}