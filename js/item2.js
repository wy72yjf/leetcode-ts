function linkNode(val) {
    this.val = val;
    this.next = null;
}


function addTowLinks (l1, l2) {
    let carry = 0;
    let p = l1;
    let q = l2;
    let prev = p;
    while(p && q) {
        let x = p.val;
        let y = q.val;
        let sum = carry + x + y;
        carry = Math.floor(sum/10);
        p.val = sum % 10;
        prev = p;
        p = p.next;
        q = q.next;
    }
    if (q) {
        prev.next = q;
    }
    if (!prev) {
        return l1;
    }
    p = prev.next;
    while(p) {
        let sum = carry + p.val;
        carry = Math.floor(sum/10);
        p.val = sum % 10;
        prev = p;
        p = p.next;
    }
    if (carry) {
        prev.next = {
            val: carry,
            next: null
        }
    }
    return l1
}

function createLinktest(arr1, arr2) {
    let link1 = null;
    let link2 = null;
    let p1, p2;
    arr1.forEach(element => {
        let node = new linkNode(element);
        if (!link1) {
            link1 = node;
            p1 = node;
        } else {
            p1.next = node;
            p1 = node;
        }
    });
    arr2.forEach(element => {
        let node = new linkNode(element);
        if (!link2) {
            link2 = node;
            p2 = node;
        } else {
            p2.next = node;
            p2 = node;
        }
    });
    return {
        link1,
        link2
    }
}

let links = createLinktest([2,4,3], [5,6,4]);
addTowLinks(links.link1, links.link2);