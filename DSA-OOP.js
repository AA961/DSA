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

    binarySearch(f) {
        let startPoint = 0;
        let endPoint = this.data.length - 1;
        let position = undefined;
        while (startPoint <= endPoint) {
            let midPoint = Math.floor((startPoint + endPoint) / 2);

            if (this.data[midPoint] === f) {
                position = midPoint;
                break;
            } else if (this.data[midPoint] < f) {
                startPoint = midPoint + 1;
            } else if (this.data[midPoint] > f) {
                endPoint = midPoint - 1;
            }
        }

        console.log(position);
    }

    recursiveSearch(f) {
        let startPoint = 0;
        let endPoint = this.data.length - 1;
        let position = undefined;
        let data = this.data

        function rec(data, startPoint, endPoint) {
            let midPoint = Math.floor((startPoint + endPoint) / 2);

            if (data[midPoint] === f) {
                position = midPoint;
                return;
            } else if (data[midPoint] < f) {
                startPoint = midPoint + 1;
                rec(data, startPoint, endPoint)
            } else {
                endPoint = midPoint - 1;
                rec(data, startPoint, endPoint)
            }
        }

        rec(data, startPoint, endPoint);
        console.log(position);
    }
}
let array = new arr([1, 2, 3, 4, 5, 6, 7, 8, 9])
// array.splicee(0, 0)
// array.delete(0)
// array.ppop()
// array.searching(615)
// console.log(array.data)
// array.binarySearch(8);
// array.recursiveSearch(3);