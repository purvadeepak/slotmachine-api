Slot Machine Simulator API
============

Slot Machine Simulator is a tool for simulating slot machine spins with realistic reel symbols and payout calculations. It supports customizable number of reels, bet amounts, and multiple spins with detailed win/loss statistics.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Python API Wrapper for the [Slot Machine Simulator API](https://apiverve.com/marketplace/api/slotmachine)

---

## Installation
	pip install apiverve-slotmachinesimulator

---

## Configuration

Before using the slotmachine API client, you have to setup your account and obtain your API Key.  
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Usage

The Slot Machine Simulator API documentation is found here: [https://docs.apiverve.com/api/slotmachine](https://docs.apiverve.com/api/slotmachine).  
You can find parameters, example responses, and status codes documented here.

### Setup

```
# Import the client module
from apiverve_slotmachinesimulator.apiClient import SlotmachineAPIClient

# Initialize the client with your APIVerve API key
api = SlotmachineAPIClient("[YOUR_API_KEY]")
```

---


### Perform Request
Using the API client, you can perform requests to the API.

###### Define Query

```
query = { "spins": 5, "reels": 3, "bet": 1 }
```

###### Simple Request

```
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

```
{
  "status": "ok",
  "error": null,
  "data": {
    "total_spins": 5,
    "num_reels": 3,
    "bet_per_spin": 1,
    "spins": [
      {
        "spin_number": 1,
        "reels": [
          {
            "symbol": "🍒",
            "name": "Cherry"
          },
          {
            "symbol": "⭐",
            "name": "Star"
          },
          {
            "symbol": "🍒",
            "name": "Cherry"
          }
        ],
        "bet": 1,
        "payout": 0,
        "win_type": "none",
        "is_win": false
      },
      {
        "spin_number": 2,
        "reels": [
          {
            "symbol": "🍒",
            "name": "Cherry"
          },
          {
            "symbol": "🍇",
            "name": "Grape"
          },
          {
            "symbol": "🍋",
            "name": "Lemon"
          }
        ],
        "bet": 1,
        "payout": 0,
        "win_type": "none",
        "is_win": false
      },
      {
        "spin_number": 3,
        "reels": [
          {
            "symbol": "🍒",
            "name": "Cherry"
          },
          {
            "symbol": "🔔",
            "name": "Bell"
          },
          {
            "symbol": "🔔",
            "name": "Bell"
          }
        ],
        "bet": 1,
        "payout": 0,
        "win_type": "none",
        "is_win": false
      },
      {
        "spin_number": 4,
        "reels": [
          {
            "symbol": "🍒",
            "name": "Cherry"
          },
          {
            "symbol": "🍊",
            "name": "Orange"
          },
          {
            "symbol": "🍒",
            "name": "Cherry"
          }
        ],
        "bet": 1,
        "payout": 0,
        "win_type": "none",
        "is_win": false
      },
      {
        "spin_number": 5,
        "reels": [
          {
            "symbol": "🍊",
            "name": "Orange"
          },
          {
            "symbol": "🔔",
            "name": "Bell"
          },
          {
            "symbol": "🍋",
            "name": "Lemon"
          }
        ],
        "bet": 1,
        "payout": 0,
        "win_type": "none",
        "is_win": false
      }
    ],
    "total_bet": 5,
    "total_winnings": 0,
    "net_profit": -5,
    "wins": 0,
    "losses": 5,
    "win_percentage": 0,
    "available_symbols": [
      {
        "symbol": "🍒",
        "name": "Cherry",
        "payout_multiplier": 2
      },
      {
        "symbol": "🍋",
        "name": "Lemon",
        "payout_multiplier": 3
      },
      {
        "symbol": "🍊",
        "name": "Orange",
        "payout_multiplier": 5
      },
      {
        "symbol": "🍇",
        "name": "Grape",
        "payout_multiplier": 10
      },
      {
        "symbol": "🔔",
        "name": "Bell",
        "payout_multiplier": 20
      },
      {
        "symbol": "⭐",
        "name": "Star",
        "payout_multiplier": 50
      },
      {
        "symbol": "💎",
        "name": "Diamond",
        "payout_multiplier": 100
      },
      {
        "symbol": "7️⃣",
        "name": "Seven",
        "payout_multiplier": 200
      }
    ]
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2025 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.