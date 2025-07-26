---

## id: get-sales-amount title: Get Sales Amount description: Retrieve the total or net sales amount for a specific branch within a defined time range.

# Get Sales Amount
---

`POST /Sales-Amount-total` or `POST /Sales-Amount-net`

---

## 🚀 Overview

Get the **total** or **net** sales amount for a given branch during a specified time period.

* **Total Sales:** All sales except cancelled orders.
* **Net Sales:** Only completed orders.

---

## 📅 Request

### HTTP Method

`POST`

### Endpoint URLs

```http
/Sales-Amount-total
/Sales-Amount-net
```

> The partner ID is automatically resolved from the authenticated user.

### Request Headers

| Header          | Required | Description                     |
| --------------- | -------- | ------------------------------- |
| `Authorization` | ✅        | Bearer token for authentication |
| `Content-Type`  | ✅        | Must be `application/json`      |

### Request Body (JSON Schema)

| Field      | Type             | Required | Description                           |
| ---------- | ---------------- | -------- | ------------------------------------- |
| `start`    | `DateTimeOffset` | ✅        | Start date/time for sales calculation |
| `end`      | `DateTimeOffset` | ✅        | End date/time for sales calculation   |
| `branchId` | `int`            | ✅        | Branch identifier                     |

> No need to pass `partnerId` or `salesType` — those are resolved by endpoint logic.

### Example Request Body

```json
{
  "start": "2025-07-01T00:00:00Z",
  "end": "2025-07-20T23:59:59Z",
  "branchId": 123
}
```

---

## 📤 Response

### Success Response (200 OK)

| Field         | Type     | Description                              |
| ------------- | -------- | ---------------------------------------- |
| `totalAmount` | `double` | Aggregated sales amount for the criteria |

### Example Success Response

```json
{
  "totalAmount": 4384.50
}
```

### Error Responses

| HTTP Status | Reason                | Description                            |
| ----------- | --------------------- | -------------------------------------- |
| 400         | Bad Request           | Invalid request data or missing fields |
| 401         | Unauthorized          | Missing or invalid auth token          |
| 500         | Internal Server Error | Server encountered an unexpected error |

---

## 💡 Usage Notes

* Date range (`start` to `end`) must not exceed the allowed maximum span.
* Call either `/Sales-Amount-total` or `/Sales-Amount-net` depending on the type of sales you need.
* `Total` excludes cancelled orders.
* `Net` includes only completed orders.

---

<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <div style={{ width: '40%', fontSize: '0.8rem', background: '#f5f7fa', padding: '1rem', borderRadius: '8px', boxShadow: '0 0 8px rgba(0,0,0,0.05)', border: '1px solid #e0e0e0' }}>

### 🔧 Code Sample (C#)

```csharp
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        var client = new HttpClient();
        client.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", "YOUR_ACCESS_TOKEN");

        var requestBody = new
        {
            start = "2025-07-01T00:00:00Z",
            end = "2025-07-20T23:59:59Z",
            branchId = 123
        };

        var response = await client.PostAsJsonAsync("https://api.yourdomain.com/Sales-Amount-total", requestBody);

        if (response.IsSuccessStatusCode)
        {
            var content = await response.Content.ReadAsStringAsync();
            Console.WriteLine("Sales Amount:");
            Console.WriteLine(content);
        }
        else
        {
            Console.WriteLine($"Error: {response.StatusCode}");
        }
    }
}
```

  </div>
</div>

---

## 🔗 Related Endpoints

* [Get Branches](./get-branches)
* [Get Customer AOV](./get-customer-aov)

---

*Generated on: 2025-07-26*
*For support, contact **[support@suppy.com](mailto:support@yourcompany.com)***
