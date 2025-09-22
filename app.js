function rocket (P,B,D) {
    const badges = Math.floor (P / B);
    const leftover = P % B;
    const money = badges * D + leftover;
    console.log(money)
}
rocket (14,3,10)
