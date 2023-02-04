function showDescription(item) {
    let description = document.getElementById('description');
    let itemName = document.getElementById('itemName');

    //Configurando o nome do item
    itemName.innerHTML = item.innerHTML;

    //Configurando a descrição do item
    switch (item.innerHTML) {
      case 'Coxinha de Frango':
        description.innerHTML = 'Coxinha de frango é um salgadinho assado ou frito, feito com massa de farinha de trigo e recheado com um creme de frango desfiado.';
        break;
      case 'Empada de Frango':
        description.innerHTML = 'Empada de Frango é um salgado muito comum em lanchonetes, feito com massa de farinha de trigo e recheado com uma mistura de frango desfiado, cenoura, milho e temperos.';
        break;
      case 'Pastel de Queijo':
        description.innerHTML = 'Pastel de Queijo é um salgadinho assado ou frito, feito com massa de farinha de trigo e recheado com queijo.';
        break;
      case 'Coxinha de Carne':
        description.innerHTML = 'Coxinha de Carne é um salgadinho assado ou frito, feito com massa de farinha de trigo e recheado com um creme de carne moída.';
        break;
      case 'Empada de Carne':
        description.innerHTML = 'Empada de Carne é um salgado muito comum em lanchonetes, feito com massa de farinha de trigo e recheado com uma mistura de carne moída, cenoura, milho e temperos.';
        break;
    }

    //Mostrando o modal
    document.getElementById('modal').style.display = 'block';
  }

  //Função para fechar o modal de descrição do item do menu
  function closeDescription() {
    document.getElementById('modal').style.display = 'none';
  }