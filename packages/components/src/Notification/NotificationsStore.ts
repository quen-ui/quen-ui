import { INotificationParams } from "./types";

type TNotificationSubscribe = () => void;

class NotificationsStore {
  private subscribes: TNotificationSubscribe[] = [];

  private notifications: INotificationParams[] = [];

  public subscribe(callback: TNotificationSubscribe): void {
    this.subscribes.push(callback);
  }

  public unsubscribe(callback: TNotificationSubscribe): void {
    this.subscribes = this.subscribes.filter((subscriber) =>
      subscriber === callback ? undefined : subscriber
    );
  }

  private notify(): void {
    this.subscribes.forEach((subscriber) => subscriber());
  }

  public updateNotifications(notifications: INotificationParams[]): void {
    this.notifications = notifications;
    this.notify();
  }

  get data(): INotificationParams[] {
    return this.notifications;
  }

}

export default new NotificationsStore();
