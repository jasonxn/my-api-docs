---

## id: get-branches title: Get Branches description: Retrieve a list of branches for the authenticated partner.

# Get Branches
---

`POST /branches`

---

## 🚀 Overview

Returns a list of branches associated with the authenticated partner.

Each branch includes its **display name** and **branch code**.

---

## 📅 Request

### HTTP Method

`POST`

### Endpoint URL

```http
/branches
```

> The `partnerId` is automatically set by the server from the authenticated user context.

### Request Headers

| Header          | Required | Description                     |
| --------------- | -------- | ------------------------------- |
| `Authorization` | ✅        | Bearer token for authentication |
| `Content-Type`  | ✅        | Must be `application/json`      |

### Request Body (JSON Schema)

> No fields are required in the request body from the client. The server will attach `partnerId` automatically.

```json
{}
```

---

## 📤 Response

### Success Response (200 OK)

Returns a list of branches, each containing display information and branch code.

| Field         | Type     | Description            |
| ------------- | -------- | ---------------------- |
| `displayName` | `string` | Name of the branch     |
| `branchCode`  | `string` | Unique code per branch |

### Example Success Response

```json
[
  {
    "displayName": "Downtown Store",
    "branchCode": "DT001"
  },
  {
    "displayName": "Airport Kiosk",
    "branchCode": "AIR02"
  }
]
```

### Error Responses

| HTTP Status | Reason                | Description                            |
| ----------- | --------------------- | -------------------------------------- |
| 400         | Bad Request           | Invalid request data or missing fields |
| 401         | Unauthorized          | Missing or invalid auth token          |
| 500         | Internal Server Error | Server encountered an unexpected error |

---

## 💡 Usage Notes

* You do **not** need to include `partnerId` in the request.
* All branches are sorted by display name.

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

        var response = await client.PostAsync("https://api.yourdomain.com/branches", null);

        if (response.IsSuccessStatusCode)
        {
            var content = await response.Content.ReadAsStringAsync();
            Console.WriteLine("Branches:");
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

* [Get Sales Amount](./get-sales-amount)

---

*Generated on: 2025-07-26*
*For support, contact **[support@suppy.com](mailto:support@yourcompany.com)***
