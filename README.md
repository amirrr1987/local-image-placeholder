# Lorem image local API

This is a simple API for generating placeholder images with customizable width, height, and color using Node.js and Sharp. This tool is especially useful for frontend developers during the development process.

## Features

- Generate dynamic placeholder images.
- Customizable width, height, and background color.
- Fast and lightweight image processing using Sharp.
- Great for local development to mock image sizes and layouts.

## Installation

To use this project, you'll need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/lorem-image-local-api.git
    cd lorem-image-local-api
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the server:
    ```bash
    node app.js
    ```

4. The server will start at `http://localhost:4200`.

## Usage

To generate a placeholder image, make a GET request to the following endpoint:


- `:width` (required) - Width of the placeholder image.
- `:height` (required) - Height of the placeholder image.
- `:color` (optional) - Background color of the placeholder image. Use a hex color code (without the `#` prefix). If not provided, the default color is `#FFCC00` (yellow).

### Example

- **Without color (uses default yellow)**:
    ```
    http://localhost:4200/placeholder/300/200
    ```

- **With custom color**:
    ```
    http://localhost:4200/placeholder/300/200/00FF00
    ```

This will generate a 300x200 image with a green (`#00FF00`) background.

## Example Response

The response will be an image in PNG format.

## Why This Tool is Great for Developers

This tool is perfect for developers working on frontend projects who need placeholder images for design layouts. Instead of relying on external services like `placeholder.com`, you can generate your images locally, which speeds up development and ensures you're not dependent on external networks or services.

By running the server locally, you can quickly generate placeholder images of any size and color, helping you prototype and layout elements without needing to use actual image assets. It's especially useful when creating responsive designs that require different image sizes.

## Dependencies

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [Sharp](https://sharp.pixelplumbing.com/) - High-performance image processing library for Node.js.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.