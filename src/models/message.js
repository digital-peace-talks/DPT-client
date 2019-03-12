export default class Message {
  /**
   * @type string
   */
  id;
  /**
   * @type string
   */
  content;
  /**
   * @type string
   */
  user;
  /**
   * @type Date
   */
  timestamp;

  /**
   * @param {string} id Message ID
   * @param {string} content content of the message
   * @param {User} user The message's sender
   * @param {Date} timestamp The time that the message was sent
   */
  constructor(id, content, user, timestamp) {
    this.id = id;
    this.content = content;
    this.user = user;
    this.timestamp = timestamp;
  }
}
