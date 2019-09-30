findGenerator(p, q){
    q = q || (p-1)/2;
    var found = 0;
    let g = 1;
    while(found != 1){
      for(;g<p; g++){
        if(Math.pow(g,2)%p != 1 && Math.pow(g,q)%p != 1){
          found = 1;
          break;
        }
      }
    }
    return g;
  }
}
