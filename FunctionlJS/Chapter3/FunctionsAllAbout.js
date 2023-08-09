function ShowItself1(identity) {
    this.identity = identity;
    const that = this;
    setTimeout(function () {
        console.log(that.identity);
    }, 1000);

    setTimeout(function () {
        console.log(this.identity);
    }.bind(this), 2000);

    setTimeout(() => {
        console.log(this.identity);
    }, 3000);
}

const x = new ShowItself1("Functional");