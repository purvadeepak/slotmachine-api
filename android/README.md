# Slot Machine Simulator Android SDK

Slot Machine Simulator is a tool for simulating slot machine spins with realistic reel symbols and payout calculations. It supports customizable number of reels, bet amounts, and multiple spins with detailed win/loss statistics.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Platform](https://img.shields.io/badge/Platform-Android-green.svg)
![Java](https://img.shields.io/badge/Java-8%2B-blue.svg)

---

## Installation

### Gradle (via JitPack)

Add JitPack repository to your root `build.gradle`:

```gradle
allprojects {
    repositories {
        maven { url 'https://jitpack.io' }
    }
}
```

Add the dependency:

```gradle
dependencies {
    implementation 'com.github.apiverve:slotmachine-api:1.1.12'
}
```

---

## Quick Start

### Basic Usage

```java
import com.apiverve.slotmachine.SlotMachineSimulatorAPIClient;
import com.apiverve.slotmachine.APIResponse;
import com.apiverve.slotmachine.APIException;

// Initialize the client
SlotMachineSimulatorAPIClient client = new SlotMachineSimulatorAPIClient("YOUR_API_KEY");

try {
    // Prepare query parameters
    Map<String, Object> parameters = new HashMap<>();
    parameters.put("key", "value");

    // Execute the request
    APIResponse response = client.execute(parameters);

    if (response.isSuccess()) {
        // Handle successful response
        JSONObject data = response.getData();
        System.out.println("Success: " + data.toString());
    } else {
        // Handle API error
        System.err.println("API Error: " + response.getError());
    }
} catch (APIException e) {
    // Handle exception
    e.printStackTrace();
}
```

### Without Parameters

```java
// Some APIs don't require parameters
APIResponse response = client.execute();
```

---

## Error Handling

The SDK provides detailed error handling:

```java
try {
    APIResponse response = client.execute(parameters);

    if (response.isSuccess()) {
        // Process success
    } else {
        // Handle API-level errors
        System.err.println("Error: " + response.getError());
    }
} catch (APIException e) {
    if (e.isAuthenticationError()) {
        System.err.println("Invalid API key");
    } else if (e.isRateLimitError()) {
        System.err.println("Rate limit exceeded");
    } else if (e.isServerError()) {
        System.err.println("Server error");
    } else {
        System.err.println("Error: " + e.getMessage());
    }
}
```

---

## Response Object

The `APIResponse` object provides several methods:

```java
APIResponse response = client.execute(params);

// Check status
boolean success = response.isSuccess();
boolean error = response.isError();

// Get data
String status = response.getStatus();
String errorMsg = response.getError();
JSONObject data = response.getData();
int code = response.getCode();

// Get raw response
JSONObject raw = response.getRawResponse();
```

---

## API Documentation

For detailed API documentation, visit: [https://docs.apiverve.com/ref/slotmachine](https://docs.apiverve.com/ref/slotmachine)

---

## Get Your API Key

Get your API key from [https://apiverve.com](https://apiverve.com)

---

## Requirements

- Java 8 or higher
- Android API level 21 (Lollipop) or higher

---

## Support

- **Documentation:** [https://docs.apiverve.com/ref/slotmachine](https://docs.apiverve.com/ref/slotmachine)
- **Issues:** [GitHub Issues](https://github.com/apiverve/slotmachine-api/issues)
- **Email:** hello@apiverve.com

---

## License

This SDK is released under the MIT License. See [LICENSE](LICENSE) for details.

---

## About APIVerve

[APIVerve](https://apiverve.com) provides production-ready REST APIs for developers. Fast, reliable, and easy to integrate.
