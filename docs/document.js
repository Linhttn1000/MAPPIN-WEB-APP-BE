/**
 * @swagger
 * paths:
 *  /api/pins:
 *    post:
 *      tags:
 *        - Pin
 *      summary: Add a new pin
 *      description: SavedPin
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - username
 *                - title
 *                - desc
 *                - rating
 *                - lat
 *                - long
 *              properties:
 *                username:
 *                  type: string
 *                  example: test1
 *                title:
 *                  type: string
 *                  example: DaLat City
 *                desc:
 *                  type: string
 *                  example: beautiful
 *                rating:
 *                  type: number
 *                  example: 5
 *                lat:
 *                  type: number
 *                  example: 8468
 *                long:
 *                  type: number
 *                  example: 46468
 *
 *      responses:
 *        200:
 *          description: Add pin successful.
 *
 *    get:
 *      tags:
 *        - Pin
 *      summary: Get all Pins
 *      description: Get ALl Pins
 *      responses:
 *        200:
 *          description: Get all pins successful.
 *        500:
 *          description: Get all pins err.
 *
 *  /api/pins/user:
 *    delete:
 *      tags:
 *        - Pin
 *      summary: Delete Pin by User
 *      description: Delete Pin by User
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - username
 *                - title
 *                - desc
 *                - rating
 *                - lat
 *                - long
 *              properties:
 *                username:
 *                  type: string
 *                  example: test1
 *                title:
 *                  type: string
 *                  example: DaLat City
 *                desc:
 *                  type: string
 *                  example: beautiful
 *                rating:
 *                  type: number
 *                  example: 5
 *                lat:
 *                  type: number
 *                  example: 8468
 *                long:
 *                  type: number
 *                  example: 46468
 *      responses:
 *        200:
 *          description: Delete Pin successful.
 *        500:
 *          description: Err.
 */

/**
 * @swagger
 * paths:
 *  /api/users/register:
 *    post:
 *      tags:
 *        - User
 *      summary: Register user
 *      description: Register user
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - username
 *                - email
 *                - password
 *              properties:
 *                username:
 *                  type: string
 *                  example: test1
 *                email:
 *                  type: string
 *                  example: test1@gmail.com
 *                password:
 *                  type: string
 *                  example: test1
 *      responses:
 *        200:
 *          description: Register successful.
 *        500:
 *          description: Err.
 *
 * /api/users/login:
 *    post:
 *      tags:
 *        - User
 *      summary: Login user
 *      description: Login user
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - username
 *                - password
 *              properties:
 *                username:
 *                  type: string
 *                  example: test1
 *                password:
 *                  type: string
 *                  example: test1
 *      responses:
 *        200:
 *          description: Login successful.
 *        500:
 *          description: Wrong username or password.
 *
 */
