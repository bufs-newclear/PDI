export class Meal {
  constructor() {
    this.id = 0;
    this.name = "";
    this.date = "";
    this.image = null;
    this.price = null;
    this.allergen = null;
    this.available = null;
    this.like = {
      like: 0,
      neutral: 0,
      bad: 0,
    };
  }

  static fetchFromId(id) {
    let meal = new Meal();
    // TODO: API에서 식단 정보를 가져온다
    return meal;
  }

  like() {
    // TODO: API로 식단 좋아요를 보낸다
    this.like++;
  }

  dislike() {
    // TODO: API로 식단 좋아요를 취소한다
  }
};