class arr {
    data;
    constructor(data) {
        this.data = data
    }
    splicee(newEl, position) {

        for (let i = this.data.length - 1; i >= 0; i--) {
            if (i >= position) {
                this.data[i + 1] = this.data[i]
                if (i == position) {
                    this.data[i] = newEl
                }
            }
        }
    }


    delete(position) {
        for (let i = position; i <= this.data.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        this.data.length = this.data.length - 1
    }


    ppop() {
        this.data.length = this.data.length - 1
    }


    searching(elemenet) {
        let index = null
        for (let i = 0; i <= this.data.length; i++) {
            if (this.data[i] == elemenet) {
                index = i
                break
            }
        }
        if (index) {
            console.log(`${elemenet} is availble at ${index}`)
        } else {
            console.log(`unable to find ${elemenet}`)
        }
    }
}
let array = new arr([1, 2, 3, 4, 5, 6, 7, 8, 9])
// array.splicee(0, 0)
// array.delete(0)
// array.ppop()
// array.searching(615)
// console.log(array.data)