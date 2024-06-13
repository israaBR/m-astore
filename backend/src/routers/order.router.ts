import { Router } from "express";
import AsyncHandler from "express-async-handler";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import { OrderModel } from "../models/order.moudel";
import { OrderStatus } from "../constants/order_status";
import authMid from "../middlewares/auth.mid";

const router = Router();
router.use(authMid);

router.post(
  "/create",
  AsyncHandler(async (req: any, res: any) => {
    const requestOrder = req.body;
    if (requestOrder.items.length <= 0) {
      res.status(HTTP_BAD_REQUEST).send("Cart is Empty");
      return;
    }

    //new
    // await OrderModel.deleteOne({
    //   user: req.user.id,
    //   status: OrderStatus.NEW,
    // });

    const newOrder = new OrderModel({ ...requestOrder, user: req.user.id });
    await newOrder.save();
    res.send(newOrder);
  })
);
//new
router.get(
  "/orderById/:id",
  AsyncHandler(async (req: any, res) => {
    const order = await OrderModel.findById(req.params.id);
    if (order) res.send(order);
    else res.status(HTTP_BAD_REQUEST).send();
  })
);
//new
router.get(
  "/allOrdersForCurrentUser",
  AsyncHandler(async (req: any, res) => {
    const orders = await getAllOrdersForCurrentUser(req);
    if (orders) res.send(orders);
    else res.status(HTTP_BAD_REQUEST).send();
  })
);

router.get(
  "/newOrderForCurrentUser",
  AsyncHandler(async (req: any, res) => {
    const order = await getNewOrderForCurrentUser(req);
    if (order) res.send(order);
    else res.status(HTTP_BAD_REQUEST).send();
  })
);

router.post(
  "/pay",
  AsyncHandler(async (req: any, res) => {
    const { paymentId } = req.body;
    const order = await getNewOrderForCurrentUser(req);
    if (!order) {
      res.status(HTTP_BAD_REQUEST).send("Order Not Found!");
      return;
    }
    order.paymentId = paymentId;
    order.status = OrderStatus.PAYED;
    await order.save();
    res.send(order._id);
  })
);

router.get(
  "/track/:id",
  AsyncHandler(async (req, res) => {
    const order = await OrderModel.findById(req.params.id);
    res.send(order);
  })
);
export default router;
//new
async function getAllOrdersForCurrentUser(req: any) {
  return await OrderModel.find({
    user: req.user.id,
  });
}
async function getNewOrderForCurrentUser(req: any) {
  return await OrderModel.findOne({
    user: req.user.id,
    status: OrderStatus.NEW,
  });
}
