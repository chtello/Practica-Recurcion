function InOrder (){
    if (nodo == null) {
        return false
    } else {
        InOrder(nodo.isq)
    }
    
}
