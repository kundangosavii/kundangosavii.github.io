---
title: "What happen when you type google.com in your browser"
date: "2026-04-19"
category: "TECH"
---

You open your favorite browser, type `google.com`, and hit Enter.  
The page loads in milliseconds. Seems simple, right?

But behind that single action, dozens of processes happen in a fraction of a second.

At a high level, this process involves:

- URL parsing  
- DNS lookup  
- TCP connection  
- TLS handshake  
- HTTP request  
- Server response  
- Browser rendering  

Let’s break it down step by step.

<hr style="margin-top: 2rem;" />

## Step 1: URL Parsing

When you type a URL, the browser first parses (understands) it.

Example:
https://www.google.com/search?q=backend


The browser splits it into:

- **Protocol:** `https`  
- **Domain:** `www.google.com`  
- **Path:** `/search`  
- **Query parameters:** `q=backend`  

At this stage, no request is sent yet.  
The browser is only understanding the structure of the URL.

### Cache Check (Before DNS Request)

Before contacting the internet, the browser checks if it already knows the IP address.

It checks caches in this order:

1. Browser cache  
2. OS cache  
3. Router cache  
4. ISP cache  

If an IP is found, the browser skips DNS lookup and moves faster.

If not, it proceeds to the next step.

<hr style="margin-top: 2rem;" />

## Step 2: DNS Lookup

If there’s no cache hit, the browser converts the domain into an IP address.

Example:
www.google.com → 142.250.xxx.xxx


This answers the question:  
**“Where is the server located?”**

The request goes through a chain:

Browser → OS → Router → ISP → Root DNS → TLD DNS → Authoritative DNS

Finally, the IP address is returned to the browser.

<hr style="margin-top: 2rem;" />

## Step 3: TCP Connection (3-Way Handshake)

Before sending data, the browser establishes a connection using TCP.

The 3-step handshake:

1. **SYN** → Client requests connection  
2. **SYN-ACK** → Server acknowledges  
3. **ACK** → Client confirms  

After this, a stable connection is established.

<hr style="margin-top: 2rem;" />

## Step 4: TLS Handshake (For HTTPS)

Since modern websites use HTTPS, a secure connection is required.

TLS ensures:

- Encryption  
- Data integrity  
- Secure communication  

During this step:

- Encryption algorithms are decided  
- Session keys are exchanged  
- SSL certificate is verified  

If the certificate is invalid, the browser shows:  
**“Your connection is not private.”**

After this, the connection becomes secure.

<hr style="margin-top: 2rem;" />

## Step 5: HTTP Request

Now the browser sends an HTTP request:

GET /search?q=backend HTTP/1.1
Host: www.google.com

User-Agent: Chrome
Accept: text/html


This is where the browser asks:

**“Give me the search results for ‘backend’.”**

<hr style="margin-top: 2rem;" />

## Step 6: Server Processing & Response

The server:

- Receives the request  
- Routes it using load balancers  
- Processes it using backend services  
- Fetches required data  

Then it responds:
HTTP/1.1 200 OK
Content-Type: text/html
\
Along with the HTML content.

<hr style="margin-top: 2rem;" />

## Step 7: Browser Rendering

The browser converts the response into a visible page.

### a) HTML → DOM Tree  
### b) CSS → CSSOM Tree  
### c) JavaScript Execution  
### d) Layout & Paint  

The browser draws everything on the screen.

<hr style="margin-top: 2rem;" />

### Loading Additional Resources

The HTML includes:

- CSS files  
- JavaScript files  
- Images  
- Fonts  

Each of these triggers additional HTTP requests, often in parallel.

<hr style="margin-top: 2rem;" />

## Why Is It So Fast?

Even though this process looks complex, it happens extremely fast due to:

### 1. Caching
- DNS results are cached  
- Static assets are cached in the browser  

### 2. CDN (Content Delivery Network)
- Content is served from the nearest server, not a single location  

### 3. Parallel Requests
- Browsers load multiple resources at the same time  

### 4. Optimized Protocols
- HTTP/2 and HTTP/3 reduce latency  
- Persistent connections avoid repeated handshakes  

---

## Final Thought

Next time you hit Enter, remember:  
You just triggered a complex chain of events across the internet — all in milliseconds.