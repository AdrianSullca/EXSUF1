function checkAge(age) {
    if (age > 18) {
        return true;
    }
    return confirm('¿Tus padres te terminaron?');
}

checkAge(20)