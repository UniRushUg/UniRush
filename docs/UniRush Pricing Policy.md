## **UNIRUSH** 

_"Quick. Safe. Convenient."_ 

## **Pricing, Revenue & Payment Policy** 

Internal Documentation v1.0  |  June 2026 

## **1. Overview** 

UniRush operates as a three-sided marketplace connecting Customers, Delivery Personnel, and Vendors (e.g. restaurants, shops) within and around campus. Every transaction on the platform involves three parties who each receive or remit a portion of the total payment. This document defines exactly how money flows between all parties, under both mobile money (inapp) and cash on delivery (COD) payment methods. 

## **2. The Three Parties in Every Transaction** 

|**Party**|**Role**|**Receives / Pays**|
|---|---|---|
|Customer|Places and pays for the order|Pays: Food Cost + Delivery Fee|
|Delivery<br>Person|Picks up and delivers the order|Receives: 80% of Delivery Fee|
|UniRush<br>(Platform)|Facilitates the transaction and<br>app infrastructure|Receives: 20% of Delivery Fee +<br>10% Restaurant Commission|
|Vendor /<br>Restaurant|Prepares and sells the goods|Receives: 90% of Food Cost|



## **3. UniRush Revenue Model** 

UniRush earns from two separate streams on every order: 

## **3.1 Stream 1 — Delivery Fee Commission (20%)** 

The delivery fee is the charge a customer pays for the courier service. UniRush retains 20% of this fee as a platform commission. The remaining 80% goes directly to the delivery person. 

|**Party**|**Share**|**Calculation**|
|---|---|---|
|Delivery Person|80%|Delivery Fee x 0.80|
|UniRush Platform|20%|Delivery Fee x 0.20|



## **3.2 Stream 2 — Restaurant / Vendor Commission (10%)** 

Inspired by platforms like Glovo and Uber Eats (which charge restaurants between 15 and 30%), UniRush charges a 10% commission on the food or goods value of every order fulfilled through the app. This lower rate reflects our campus scale and is designed to attract and retain local vendors. 

|**Party**|**Share**|**Calculation**|
|---|---|---|
|Vendor / Restaurant|90%|Food Cost x 0.90|
|UniRush Platform|10%|Food Cost x 0.10|



_Benchmark: Uber Eats charges restaurants 20-30% commission. Glovo charges similar rates. UniRush's 10% rate is intentionally low to support campus small businesses and drive vendor adoption on the platform._ 

## **4. Worked Example — Mobile Money Payment** 

Scenario: Emilly orders chips and beef from Delight Restaurant, to be delivered to Sky Courts Hostel. 

|**Item**|**Amount (UGX)**|
|---|---|
|Food Cost (Chips and Beef)|5,000|
|Delivery Service Fee|3,000|
|Total Paid by Emilly|8,000|



## **4.1 How the UGX 8,000 is Split** 

|**Recipient**|**Amount**<br>**(UGX)**|**How It's Calculated**|**Notes**|
|---|---|---|---|
|Delight Restaurant|4,500|5,000 x 90%|Food cost minus<br>UniRush 10%|



||||commission|
|---|---|---|---|
|UniRush (Food<br>Commission)|500|5,000 x 10%|Platform fee on food<br>value|
|Delivery Person|2,400|3,000 x 80%|80% of delivery fee|
|UniRush (Delivery<br>Commission)|600|3,000 x 20%|Platform cut of<br>delivery fee|
|TOTAL|8,000|—|Equals exactly what<br>Emilly paid|



## **4.2 UniRush Total Earnings on This Order** 

|**Source**|**Amount (UGX)**|
|---|---|
|Delivery commission (20% of 3,000)|600|
|Restaurant commission (10% of 5,000)|500|
|UniRush Total|1,100|



## **4.3 How Mobile Money Payment Works — Step by Step** 

When Emilly pays UGX 8,000 through the app via mobile money: 

1. Emilly initiates payment in-app. The full UGX 8,000 is collected into UniRush's platform escrow wallet. 

2. The system automatically splits the amount: UGX 4,500 is queued for Delight Restaurant; UGX 2,400 is queued for the delivery person; UGX 1,100 is retained by UniRush. 

3. Upon confirmed delivery — when the delivery person marks the order as delivered — disbursements are released automatically. 

4. Restaurants receive weekly payouts every Monday. Delivery personnel receive earnings in their in-app wallet, withdrawable at any time via mobile money. 

## **5. Cash on Delivery (COD) — Policy and Process** 

Cash on delivery presents a unique challenge because the customer pays physically to the delivery person, not through the app. UniRush adopts a model inspired by Glovo's cash settlement system, where the courier acts as a temporary cash custodian on behalf of the platform. 

## **5.1 The COD Problem** 

- The customer hands UGX 8,000 cash to the delivery person at the door. 

- The restaurant has already prepared and released the food — they need to be paid. 

- UniRush has not yet received its commission. 

- The delivery person should only keep their 80% (UGX 2,400) — not the full amount. 

## **5.2 UniRush COD Solution — The Cash Ledger System** 

When a customer selects Cash on Delivery, the following process applies: 

## **Step 1 — Restaurant Upfront Settlement** 

UniRush pays the restaurant their share (UGX 4,500) before the delivery is made, drawn from UniRush's platform float (operating reserve). The restaurant is never asked to wait for cash to arrive from the customer. 

## **Step 2 — Delivery Person Collects Full Cash** 

The delivery person collects the full UGX 8,000 from the customer. The app records this as a 'cash collected' event and the amount is logged in the delivery person's Cash Ledger — meaning the system knows they are holding UGX 8,000 that is not fully theirs to keep. 

## **Step 3 — Cash Remittance Obligation** 

Of the UGX 8,000 collected, the delivery person is entitled to keep only their earned share: 

|**Amount Collected**|**Keep (Delivery Person**<br>**Earnings)**|**Remit to UniRush**|
|---|---|---|
|UGX 8,000|UGX 2,400  (80% of delivery<br>fee)|UGX 5,600  (food cost +<br>UniRush commissions)|



The delivery person must remit UGX 5,600 to UniRush via mobile money within 24 hours of delivery. This amount covers the restaurant advance (UGX 4,500) + UniRush delivery commission (UGX 600) + UniRush restaurant commission (UGX 500). 

## **Step 4 — Reconciliation in the App** 

Once the remittance is confirmed, the delivery person's Cash Ledger is cleared and their earnings (UGX 2,400) are confirmed in their in-app wallet. If remittance is not received within 24 hours, the delivery person's account is flagged and their ability to accept new orders is suspended until the balance is cleared. 

## **5.3 COD Full Flow Summary** 

|**St**<br>**ep**|**Action**|**Who Does It**|
|---|---|---|
|1|Customer places COD order in app|Customer|
|2|UniRush pays restaurant UGX 4,500 from<br>platform float|UniRush (Automated)|
|3|Delivery person picks up and delivers order|Delivery Person|
|4|Customer hands over UGX 8,000 cash at the door|Customer to Delivery Person|
|5|App logs UGX 8,000 as cash held in courier's<br>ledger|System (Automated)|
|6|Delivery person remits UGX 5,600 to UniRush via<br>mobile money within 24hrs|Delivery Person|
|7|System confirms remittance; UGX 2,400 wallet<br>earnings are unlocked|System (Automated)|



## **6. Mobile Money vs Cash on Delivery — Comparison** 

|**Factor**|**Mobile Money**|**Cash on Delivery**|
|---|---|---|
|Customer pays|Via app before delivery|Cash at the door on delivery|
|Restaurant paid|Auto-disbursed after delivery<br>confirmed|Upfront from UniRush platform<br>float|
|Delivery person<br>earnings|Auto-credited to in-app wallet|Keep their cut; remit the rest<br>within 24hrs|
|UniRush<br>commission|Auto-deducted instantly|Recovered through courier<br>remittance|
|Risk level|Low — fully automated|Medium — requires courier<br>compliance|
|Recommended for|All orders (preferred method)|Customers without mobile money<br>access|



## **7. Key Policies** 

## **7.1 Delivery Person Policies** 

- Delivery personnel receive 80% of the delivery fee for every completed order. 

- COD couriers must remit the platform's share to UniRush within 24 hours — no exceptions. 

- Failure to remit results in automatic account suspension until the outstanding balance is cleared. 

- Repeated non-remittance (3 or more incidents) results in permanent account deactivation. 

- Earnings are withdrawable from the in-app wallet to mobile money at any time. 

## **7.2 Restaurant / Vendor Policies** 

- UniRush charges a 10% commission on all food or goods sold through the platform. 

- For mobile money orders, restaurants receive weekly payouts every Monday. 

- For COD orders, restaurants are paid upfront by UniRush before the delivery occurs. 

- Restaurants must keep menus and pricing accurate and up to date in the app. 

## **7.3 Customer Policies** 

- Customers pay: Food Cost + Delivery Fee. No hidden charges. 

- Mobile money is the preferred and recommended payment method. 

- COD is available but subject to availability in certain delivery zones. 

- Cancellations made after a delivery person has been assigned may incur a UGX 500 cancellation fee. 

## **7.4 Platform Float and Reserve** 

UniRush maintains a platform float to front restaurant payments on COD orders. This reserve must always hold sufficient funds to cover at least 48 hours of projected COD order volume. The Finance team is responsible for monitoring and replenishing the float as needed. 

## **8. Quick Reference — Split at a Glance** 

|**Order Component**|**Customer**<br>**Pays**|**Vendor Gets**|**Delivery Person**<br>**Gets**|**UniRush**<br>**Gets**|
|---|---|---|---|---|
|Food / Goods|Full food cost|90% of food<br>cost|—|10% of food<br>cost|



|Delivery Fee|Full delivery<br>fee|—|80% of delivery<br>fee|20% of<br>delivery fee|
|---|---|---|---|---|
|Example (UGX)|8,000 total|4,500|2,400|1,100|



_UniRush  •  Quick. Safe. Convenient.  •  Pricing and Payment Policy v1.0  •  Confidential_ 

