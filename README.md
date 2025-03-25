# Season Clock

A web application that displays a season clock inspired by Scott Thrift's "The Present" project. The clock rotates once per year, with the hand position indicating the current date and colors representing different seasons.

## Features

- Circular clock that rotates once per year
- Clock hand indicates the current date
- Color segments representing different seasons:
  - Violet/blue for winter
  - Green for spring
  - Golden for summer equinox
  - Red for fall
- Information modal with attribution to the original concept

## Technologies

- Python 3.6+
- Flask web framework
- HTML5, CSS3, JavaScript

## Installation

1. Clone the repository or download the source code
2. Install dependencies:

```bash
pip install -r requirements.txt
```

## Running the Application

```bash
python app.py
```

The application will be available at http://localhost:5000

## Running Tests

```bash
pytest
```

## Project Structure

```
season-clock/
├── app.py                # Main Flask application
├── requirements.txt      # Python dependencies
├── README.md            # This file
├── static/              # Static assets
│   ├── css/
│   │   └── styles.css   # CSS stylesheets
│   └── js/
│       └── clock.js     # JavaScript for clock functionality
├── templates/           # HTML templates
│   └── index.html       # Main page template
└── tests/               # Test files
    └── test_app.py      # Tests for the Flask application
```

## License

This project is inspired by Scott Thrift's "The Present" project as seen on leetusman.com.

## Acknowledgements

- Scott Thrift for the original "The Present" concept
- The implementation on leetusman.com for inspiration