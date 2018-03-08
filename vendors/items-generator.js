function Item(data) {
  if (!(this instanceof Item)) {
    return new EventItem(data, inputRef);
  }
}

function TimeItem() { }
function HotelItem() { }
function RoomItem() { }

TimeItem.prototype = new Item();
HotelItem.prototype = new HotelItem();
RoomItem.prototype = new Item();

function ItemGenerator() {
  if (!(this instanceof ItemGenerator)) {
    return new ItemsGenerator();
  }

  this.generate = function () {
    var items = [],
      events = [],
      rooms = [],
      hotels = [];

    $('input[data-type]').each(function (index, elem) {

    });
  }
}

function OrdersBasket() {
  var basketItems = [];
  var events = {
    onadd =[],
    ondelete =[],
    onchange =[]
  }

  this.addItem = function(item) {
    
  }

  function callEvent(type, item) {
    var evs = events[type];
    for (var i = 0; i < evs.length; i++) {
      evs[i](item);
    }
  }

  function addEvent(type, callback) {
    event[type].push(callback);
  }
}

function App() {
  if (!(this instanceof App)) {
    return new App();
  }
  var itemGenerator = new ItemGenerator();
  var ordersBasket = new OrdersBasket();
}