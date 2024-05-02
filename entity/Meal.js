import moment from "moment";
import { BACKEND_URL } from "../config";
import { api, api_get } from "../misc/tools";
import { getAuthToken } from "../auth";


export class Meal {
  constructor(id, name, date, type, like = 0, myLike = false) {
    this.id = id;
    this.name = name;  // NOTE: 교직원식당과 같이 여러 항목이 있는 경우 콤마(,)로 나누어 저장. 필요 시 split하여 사용
    this.date = date;
    this.type = type; // 'morning' or 'lunch' or 'employee'
    this.likeCount = like;
    this.myLike = false;
    // 이하 항목은 학교측 정보제공 불가능으로 보류
    // this.image = image;
    // this.price = price;
    // this.allergen = allergen;
    // this.available = available;
    // this.myLike = myLike;
  }

  static async fetchDaily(date=moment.utc()) {
    const dateString = date.local().format('YYYY-MM-DD');
    const res = await api_get(
      `${BACKEND_URL}/meals/meal/?sinceDate=${dateString}&untilDate=${dateString}`
    );

    if (!res.ok) {
      throw new Error(`일간 식단을 가져올 수 없습니다 [${res.status}] : ${res.json}`);
    }

    const data = await res.json();
    let meals = [];

    data.forEach(meal => {
      meals.push(new Meal(
        meal.id,
        meal.name,
        meal.date,
        meal.meal_type,
        meal.like_count
      ))
    });

    return meals;
  }

  // static fetchFromId(id, date) {
  //   let meal = new Meal();
  //   // TODO: API에서 식단 정보를 가져온다
  //   return meal;
  // }

   

  async like() {
    /**
     * 식단을 좋아요한다.
     * TODO: 이미 좋아요를 한 경우, 기존의 좋아요를 덮어씌운다
     */
    if (!this.myLike) {  // Only send a request if the meal is not already liked
      const token = await getAuthToken();
      const res = await api(
        `${BACKEND_URL}/meals/like/`,  // Ensure this endpoint is correct
        { meal: this.id }, {}, token
      );
      if (res.ok) {
        this.likeCount++;
        this.myLike = true;
      } else {
        console.error(res.json());
        throw new Error(res.json()['detail']);
      }
    }
  }

  async dislike() {
    /**
     * 식단을 좋아요 취소한다. 좋아요가 없는 경우 무효하다
     */
    if (this.myLike) {  // Only send a request if the meal is currently liked
      const token = await getAuthToken();
      const res = await api(
        `${BACKEND_URL}/meals/like/`,  // Ensure this endpoint is correct
        { meal: this.id }, {}, token
      );
      if (res.ok) {
        this.likeCount--;
        this.myLike = false;
      } else {
        throw new Error('Failed to dislike the meal');
      }
    }
  }
}