//////////// Factory Pattern

class standartMembership{
  
  constructor(name){
    this.count = 5
    this.name = name
  }
  
  render(){
    console.log(`Standard for ${this.name}`) 
  }

}

class premiumMembership {

  constructor(name){
    this.count = 3
    this.name = name
  }

}

class MemberFactoty {

  create(type, name){

    if (type == 'standard'){
      const member = new standartMembership(name)
      if (!member.render){
        console.log(`No method`)
      } else {
        member.render()
      }
    }

    if (type == 'premium'){
      const member = new premiumMembership(name)
      if (!member.render){
        console.log(`No method`)
      } else {
        member.render()
      }
    }

  }

}

const factory = new MemberFactoty()
factory.create('standard', 'Ruslan')
factory.create('premium', 'Samir')