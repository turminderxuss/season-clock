"""
Tests for the Season Clock Flask application
"""

import pytest
from app import app as flask_app

@pytest.fixture
def app():
    """Create a Flask test client"""
    flask_app.config.update({
        "TESTING": True,
    })
    return flask_app

@pytest.fixture
def client(app):
    """Create a test client for the app"""
    return app.test_client()

def test_index_route(client):
    """Test that the index route returns a successful response"""
    response = client.get("/")
    assert response.status_code == 200
    assert b"Season Clock" in response.data

def test_static_files(client):
    """Test that the static files are accessible"""
    response = client.get("/static/css/styles.css")
    assert response.status_code == 200
    
    response = client.get("/static/js/clock.js")
    assert response.status_code == 200