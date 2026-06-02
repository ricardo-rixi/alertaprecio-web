/**
 * AlertaPrecio MX — Demo Dashboard (GitHub Pages)
 * Con placeholder data profundo: 16 productos, historial 14 dias, 10 alertas.
 */

var DEMO_DATA = {"pro": {"1": {"product": {"id": 1, "name": "Samsung Galaxy S25 Ultra 256GB", "platform": "mercadolibre", "url": "https://www.mercadolibre.com.mx/samsung-galaxy-s25-ultra-256gb", "competitor_urls": "[\"https://competidor1.mx/producto\", \"https://competidor2.mx/producto\", \"https://competidor3.mx/producto\"]", "category": "Electr\u00f3nicos", "competitors": 3, "created_at": "2026-05-15T10:00:00.000Z"}, "history": [{"price": 25058, "old_price": null, "rating": 3.7, "stock_status": "in_stock", "scraped_at": "2026-06-09T20:44:00.000Z"}, {"price": 25190, "old_price": null, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-08T10:48:00.000Z"}, {"price": 25207, "old_price": 26751, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-08T15:06:00.000Z"}, {"price": 24049, "old_price": null, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-07T22:02:00.000Z"}, {"price": 24687, "old_price": null, "rating": 5.0, "stock_status": "in_stock", "scraped_at": "2026-06-07T18:18:00.000Z"}, {"price": 24800, "old_price": null, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-06T21:04:00.000Z"}, {"price": 23958, "old_price": null, "rating": 4.1, "stock_status": "in_stock", "scraped_at": "2026-06-06T13:55:00.000Z"}, {"price": 24281, "old_price": null, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-05T15:22:00.000Z"}, {"price": 24724, "old_price": null, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-05T19:40:00.000Z"}, {"price": 24962, "old_price": 25696, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-04T20:44:00.000Z"}, {"price": 25638, "old_price": 29528, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-04T10:51:00.000Z"}, {"price": 25392, "old_price": null, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-03T21:20:00.000Z"}, {"price": 25166, "old_price": null, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-03T12:16:00.000Z"}, {"price": 24848, "old_price": 27259, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-02T19:25:00.000Z"}, {"price": 24827, "old_price": 25445, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-02T11:09:00.000Z"}], "latest_price": 25058, "previous_price": 25190}, "2": {"product": {"id": 2, "name": "iPhone 16 Pro Max 256GB", "platform": "mercadolibre", "url": "https://www.mercadolibre.com.mx/iphone-16-pro-max-256gb", "competitor_urls": "[\"https://competidor1.mx/producto\", \"https://competidor2.mx/producto\"]", "category": "Electr\u00f3nicos", "competitors": 2, "created_at": "2026-05-16T10:00:00.000Z"}, "history": [{"price": 29660, "old_price": 31914, "rating": 3.8, "stock_status": "in_stock", "scraped_at": "2026-06-09T17:33:00.000Z"}, {"price": 28795, "old_price": null, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-08T11:43:00.000Z"}, {"price": 29354, "old_price": 33415, "rating": 4.1, "stock_status": "in_stock", "scraped_at": "2026-06-08T12:29:00.000Z"}, {"price": 27767, "old_price": 31364, "rating": 5.0, "stock_status": "in_stock", "scraped_at": "2026-06-07T18:58:00.000Z"}, {"price": 27733, "old_price": null, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-07T13:09:00.000Z"}, {"price": 28107, "old_price": null, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-06T10:38:00.000Z"}, {"price": 28195, "old_price": null, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-06T22:19:00.000Z"}, {"price": 28367, "old_price": null, "rating": 4.4, "stock_status": "in_stock", "scraped_at": "2026-06-05T21:31:00.000Z"}, {"price": 29560, "old_price": 32394, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-05T18:10:00.000Z"}, {"price": 29092, "old_price": 31308, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-04T21:44:00.000Z"}, {"price": 29225, "old_price": null, "rating": 5.0, "stock_status": "in_stock", "scraped_at": "2026-06-04T17:57:00.000Z"}, {"price": 29748, "old_price": null, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-03T19:35:00.000Z"}, {"price": 29218, "old_price": null, "rating": 3.8, "stock_status": "in_stock", "scraped_at": "2026-06-03T13:04:00.000Z"}, {"price": 29934, "old_price": 30316, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-02T13:34:00.000Z"}, {"price": 28466, "old_price": 31392, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-02T22:26:00.000Z"}], "latest_price": 29660, "previous_price": 28795}, "3": {"product": {"id": 3, "name": "Nintendo Switch OLED", "platform": "amazon", "url": "https://www.amazon.com.mx/nintendo-switch-oled", "competitor_urls": "[\"https://competidor1.mx/producto\", \"https://competidor2.mx/producto\", \"https://competidor3.mx/producto\"]", "category": "Videojuegos", "competitors": 3, "created_at": "2026-05-17T10:00:00.000Z"}, "history": [{"price": 6805, "old_price": null, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-09T17:55:00.000Z"}, {"price": 6913, "old_price": 8138, "rating": 3.8, "stock_status": "in_stock", "scraped_at": "2026-06-08T15:51:00.000Z"}, {"price": 6874, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-08T16:11:00.000Z"}, {"price": 6604, "old_price": null, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-07T18:06:00.000Z"}, {"price": 6483, "old_price": 7459, "rating": 5.0, "stock_status": "in_stock", "scraped_at": "2026-06-07T13:10:00.000Z"}, {"price": 6601, "old_price": null, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-06T12:24:00.000Z"}, {"price": 6501, "old_price": null, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-06T14:27:00.000Z"}, {"price": 6806, "old_price": 7766, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-05T13:18:00.000Z"}, {"price": 6727, "old_price": null, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-05T15:03:00.000Z"}, {"price": 6748, "old_price": null, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-04T10:32:00.000Z"}, {"price": 6811, "old_price": null, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-04T13:25:00.000Z"}, {"price": 6839, "old_price": 7142, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-03T16:42:00.000Z"}, {"price": 6970, "old_price": null, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-03T21:20:00.000Z"}, {"price": 6792, "old_price": null, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-02T15:59:00.000Z"}, {"price": 6885, "old_price": null, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-02T11:04:00.000Z"}], "latest_price": 6805, "previous_price": 6913}, "4": {"product": {"id": 4, "name": "MacBook Air M4 13\" 16GB", "platform": "mercadolibre", "url": "https://www.mercadolibre.com.mx/macbook-air-m4-13\"-16gb", "competitor_urls": "[\"https://competidor1.mx/producto\"]", "category": "Electr\u00f3nicos", "competitors": 1, "created_at": "2026-05-18T10:00:00.000Z"}, "history": [{"price": 28512, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-09T11:56:00.000Z"}, {"price": 27792, "old_price": null, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-08T14:39:00.000Z"}, {"price": 28481, "old_price": 31193, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-08T20:06:00.000Z"}, {"price": 28120, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-07T18:09:00.000Z"}, {"price": 27009, "old_price": null, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-07T20:54:00.000Z"}, {"price": 26984, "old_price": null, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-06T11:40:00.000Z"}, {"price": 27362, "old_price": null, "rating": 3.7, "stock_status": "in_stock", "scraped_at": "2026-06-06T20:16:00.000Z"}, {"price": 27280, "old_price": null, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-05T11:04:00.000Z"}, {"price": 28721, "old_price": 29492, "rating": 3.7, "stock_status": "in_stock", "scraped_at": "2026-06-05T18:09:00.000Z"}, {"price": 28320, "old_price": null, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-04T10:57:00.000Z"}, {"price": 28436, "old_price": 31850, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-04T16:39:00.000Z"}, {"price": 29046, "old_price": 30284, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-03T12:56:00.000Z"}, {"price": 28465, "old_price": null, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-03T16:51:00.000Z"}, {"price": 28572, "old_price": 29848, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-02T16:55:00.000Z"}, {"price": 27353, "old_price": null, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-02T15:19:00.000Z"}], "latest_price": 28512, "previous_price": 27792}, "5": {"product": {"id": 5, "name": "AirPods Pro 2da Gen", "platform": "amazon", "url": "https://www.amazon.com.mx/airpods-pro-2da-gen", "competitor_urls": "[\"https://competidor1.mx/producto\", \"https://competidor2.mx/producto\"]", "category": "Audio", "competitors": 2, "created_at": "2026-05-19T10:00:00.000Z"}, "history": [{"price": 5471, "old_price": 5691, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-09T14:55:00.000Z"}, {"price": 5213, "old_price": 5542, "rating": 4.4, "stock_status": "in_stock", "scraped_at": "2026-06-08T18:21:00.000Z"}, {"price": 5378, "old_price": null, "rating": 5.0, "stock_status": "in_stock", "scraped_at": "2026-06-08T14:02:00.000Z"}, {"price": 5102, "old_price": null, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-07T19:32:00.000Z"}, {"price": 5070, "old_price": 5243, "rating": 3.8, "stock_status": "in_stock", "scraped_at": "2026-06-07T18:59:00.000Z"}, {"price": 5251, "old_price": 6140, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-06T16:04:00.000Z"}, {"price": 5318, "old_price": 5915, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-06T14:32:00.000Z"}, {"price": 5202, "old_price": null, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-05T12:12:00.000Z"}, {"price": 5297, "old_price": 5943, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-05T14:25:00.000Z"}, {"price": 5391, "old_price": null, "rating": 4.1, "stock_status": "in_stock", "scraped_at": "2026-06-04T19:38:00.000Z"}, {"price": 5460, "old_price": null, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-04T17:50:00.000Z"}, {"price": 5537, "old_price": 5706, "rating": 3.8, "stock_status": "in_stock", "scraped_at": "2026-06-03T20:39:00.000Z"}, {"price": 5367, "old_price": 6093, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-03T13:09:00.000Z"}, {"price": 5237, "old_price": null, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-02T11:29:00.000Z"}, {"price": 5276, "old_price": null, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-02T17:25:00.000Z"}], "latest_price": 5471, "previous_price": 5213}, "6": {"product": {"id": 6, "name": "Monitor LG UltraGear 27\" 4K 144Hz", "platform": "mercadolibre", "url": "https://www.mercadolibre.com.mx/monitor-lg-ultragear-27\"-4k-144hz", "competitor_urls": "[\"https://competidor1.mx/producto\", \"https://competidor2.mx/producto\"]", "category": "Electr\u00f3nicos", "competitors": 2, "created_at": "2026-05-20T10:00:00.000Z"}, "history": [{"price": 9032, "old_price": 9041, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-09T11:49:00.000Z"}, {"price": 9014, "old_price": null, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-08T10:35:00.000Z"}, {"price": 8823, "old_price": 9548, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-08T18:38:00.000Z"}, {"price": 8758, "old_price": 9456, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-07T16:53:00.000Z"}, {"price": 8966, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-07T17:16:00.000Z"}, {"price": 8892, "old_price": 9336, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-06T13:17:00.000Z"}, {"price": 8802, "old_price": 9174, "rating": 4.1, "stock_status": "in_stock", "scraped_at": "2026-06-06T11:08:00.000Z"}, {"price": 8763, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-05T16:26:00.000Z"}, {"price": 8955, "old_price": null, "rating": 3.8, "stock_status": "in_stock", "scraped_at": "2026-06-05T16:57:00.000Z"}, {"price": 9255, "old_price": 9288, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-04T17:00:00.000Z"}, {"price": 9403, "old_price": null, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-04T16:34:00.000Z"}, {"price": 9335, "old_price": null, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-03T13:17:00.000Z"}, {"price": 9159, "old_price": null, "rating": 4.1, "stock_status": "in_stock", "scraped_at": "2026-06-03T16:46:00.000Z"}, {"price": 8956, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-02T10:58:00.000Z"}, {"price": 8951, "old_price": null, "rating": 3.7, "stock_status": "in_stock", "scraped_at": "2026-06-02T12:55:00.000Z"}], "latest_price": 9032, "previous_price": 9014}, "7": {"product": {"id": 7, "name": "Sony WH-1000XM5 Audifonos", "platform": "mercadolibre", "url": "https://www.mercadolibre.com.mx/sony-wh-1000xm5-audifonos", "competitor_urls": "[\"https://competidor1.mx/producto\", \"https://competidor2.mx/producto\"]", "category": "Audio", "competitors": 2, "created_at": "2026-05-21T10:00:00.000Z"}, "history": [{"price": 6593, "old_price": null, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-09T15:21:00.000Z"}, {"price": 6619, "old_price": null, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-08T14:53:00.000Z"}, {"price": 6318, "old_price": null, "rating": 4.4, "stock_status": "in_stock", "scraped_at": "2026-06-08T15:14:00.000Z"}, {"price": 6433, "old_price": 7188, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-07T13:53:00.000Z"}, {"price": 6187, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-07T19:13:00.000Z"}, {"price": 6329, "old_price": null, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-06T21:45:00.000Z"}, {"price": 6251, "old_price": 7336, "rating": 3.8, "stock_status": "out_of_stock", "scraped_at": "2026-06-06T14:36:00.000Z"}, {"price": 6500, "old_price": 6964, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-05T21:53:00.000Z"}, {"price": 6563, "old_price": null, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-05T19:51:00.000Z"}, {"price": 6473, "old_price": 7385, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-04T15:04:00.000Z"}, {"price": 6649, "old_price": null, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-04T11:27:00.000Z"}, {"price": 6811, "old_price": null, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-03T16:11:00.000Z"}, {"price": 6712, "old_price": 7038, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-03T17:29:00.000Z"}, {"price": 6556, "old_price": 6873, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-02T11:17:00.000Z"}, {"price": 6623, "old_price": null, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-02T16:21:00.000Z"}], "latest_price": 6593, "previous_price": 6619}, "8": {"product": {"id": 8, "name": "PlayStation 5 Slim Digital", "platform": "amazon", "url": "https://www.amazon.com.mx/playstation-5-slim-digital", "competitor_urls": "[\"https://competidor1.mx/producto\", \"https://competidor2.mx/producto\"]", "category": "Videojuegos", "competitors": 2, "created_at": "2026-05-22T10:00:00.000Z"}, "history": [{"price": 8438, "old_price": 8714, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-09T15:17:00.000Z"}, {"price": 8706, "old_price": 9139, "rating": 3.7, "stock_status": "in_stock", "scraped_at": "2026-06-08T11:15:00.000Z"}, {"price": 8533, "old_price": null, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-08T20:45:00.000Z"}, {"price": 8345, "old_price": 8485, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-07T14:42:00.000Z"}, {"price": 8330, "old_price": null, "rating": 4.4, "stock_status": "in_stock", "scraped_at": "2026-06-07T21:35:00.000Z"}, {"price": 8219, "old_price": 8620, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-06T13:20:00.000Z"}, {"price": 8177, "old_price": null, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-06T13:47:00.000Z"}, {"price": 8418, "old_price": 9898, "rating": 4.4, "stock_status": "in_stock", "scraped_at": "2026-06-05T11:53:00.000Z"}, {"price": 8399, "old_price": null, "rating": 3.9, "stock_status": "out_of_stock", "scraped_at": "2026-06-05T18:08:00.000Z"}, {"price": 8530, "old_price": 9380, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-04T22:31:00.000Z"}, {"price": 8523, "old_price": null, "rating": 4.1, "stock_status": "in_stock", "scraped_at": "2026-06-04T15:11:00.000Z"}, {"price": 8909, "old_price": null, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-03T11:25:00.000Z"}, {"price": 8674, "old_price": null, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-03T22:36:00.000Z"}, {"price": 8792, "old_price": null, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-02T16:38:00.000Z"}, {"price": 8540, "old_price": null, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-02T17:19:00.000Z"}], "latest_price": 8438, "previous_price": 8706}, "9": {"product": {"id": 9, "name": "Cafetera Nespresso Vertuo Next", "platform": "amazon", "url": "https://www.amazon.com.mx/cafetera-nespresso-vertuo-next", "competitor_urls": "[\"https://competidor1.mx/producto\"]", "category": "Hogar", "competitors": 1, "created_at": "2026-05-23T10:00:00.000Z"}, "history": [{"price": 3413, "old_price": 3601, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-09T21:06:00.000Z"}, {"price": 3391, "old_price": null, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-08T12:15:00.000Z"}, {"price": 3222, "old_price": null, "rating": 3.7, "stock_status": "in_stock", "scraped_at": "2026-06-08T19:30:00.000Z"}, {"price": 3206, "old_price": null, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-07T17:04:00.000Z"}, {"price": 3251, "old_price": 3712, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-07T13:27:00.000Z"}, {"price": 3155, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-06T12:04:00.000Z"}, {"price": 3164, "old_price": 3503, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-06T17:07:00.000Z"}, {"price": 3265, "old_price": null, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-05T18:31:00.000Z"}, {"price": 3300, "old_price": null, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-05T19:16:00.000Z"}, {"price": 3270, "old_price": null, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-04T19:01:00.000Z"}, {"price": 3456, "old_price": 3624, "rating": 3.8, "stock_status": "in_stock", "scraped_at": "2026-06-04T17:33:00.000Z"}, {"price": 3406, "old_price": 3517, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-03T17:05:00.000Z"}, {"price": 3363, "old_price": null, "rating": 4.1, "stock_status": "in_stock", "scraped_at": "2026-06-03T12:21:00.000Z"}, {"price": 3324, "old_price": null, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-02T22:35:00.000Z"}, {"price": 3223, "old_price": null, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-02T22:25:00.000Z"}], "latest_price": 3413, "previous_price": 3391}, "10": {"product": {"id": 10, "name": "Silla Gamer Corsair T3 Rush", "platform": "mercadolibre", "url": "https://www.mercadolibre.com.mx/silla-gamer-corsair-t3-rush", "competitor_urls": "[\"https://competidor1.mx/producto\", \"https://competidor2.mx/producto\"]", "category": "Muebles", "competitors": 2, "created_at": "2026-05-24T10:00:00.000Z"}, "history": [{"price": 8276, "old_price": 8278, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-09T10:12:00.000Z"}, {"price": 8049, "old_price": null, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-08T10:13:00.000Z"}, {"price": 7850, "old_price": null, "rating": 4.1, "stock_status": "in_stock", "scraped_at": "2026-06-08T17:07:00.000Z"}, {"price": 7669, "old_price": null, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-07T14:35:00.000Z"}, {"price": 7613, "old_price": null, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-07T11:29:00.000Z"}, {"price": 7982, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-06T14:32:00.000Z"}, {"price": 7930, "old_price": null, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-06T17:35:00.000Z"}, {"price": 7787, "old_price": null, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-05T12:55:00.000Z"}, {"price": 7855, "old_price": 9063, "rating": 4.1, "stock_status": "in_stock", "scraped_at": "2026-06-05T14:52:00.000Z"}, {"price": 7920, "old_price": 9114, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-04T12:28:00.000Z"}, {"price": 8196, "old_price": null, "rating": 4.4, "stock_status": "in_stock", "scraped_at": "2026-06-04T17:59:00.000Z"}, {"price": 8127, "old_price": null, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-03T13:54:00.000Z"}, {"price": 8277, "old_price": null, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-03T22:24:00.000Z"}, {"price": 8049, "old_price": 9238, "rating": 5.0, "stock_status": "in_stock", "scraped_at": "2026-06-02T10:08:00.000Z"}, {"price": 8000, "old_price": null, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-02T17:06:00.000Z"}], "latest_price": 8276, "previous_price": 8049}, "11": {"product": {"id": 11, "name": "Apple Watch Series 9 GPS 45mm", "platform": "mercadolibre", "url": "https://www.mercadolibre.com.mx/apple-watch-series-9-gps-45mm", "competitor_urls": "[\"https://competidor1.mx/producto\"]", "category": "Electr\u00f3nicos", "competitors": 1, "created_at": "2026-05-25T10:00:00.000Z"}, "history": [{"price": 10176, "old_price": null, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-09T20:09:00.000Z"}, {"price": 9840, "old_price": 10309, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-08T11:54:00.000Z"}, {"price": 9843, "old_price": 10788, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-08T22:31:00.000Z"}, {"price": 10009, "old_price": null, "rating": 3.8, "stock_status": "in_stock", "scraped_at": "2026-06-07T14:14:00.000Z"}, {"price": 9883, "old_price": null, "rating": 3.8, "stock_status": "in_stock", "scraped_at": "2026-06-07T11:28:00.000Z"}, {"price": 9588, "old_price": null, "rating": 3.7, "stock_status": "in_stock", "scraped_at": "2026-06-06T10:18:00.000Z"}, {"price": 9739, "old_price": null, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-06T20:50:00.000Z"}, {"price": 9751, "old_price": null, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-05T20:15:00.000Z"}, {"price": 10033, "old_price": null, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-05T17:16:00.000Z"}, {"price": 10232, "old_price": 11089, "rating": 4.1, "stock_status": "in_stock", "scraped_at": "2026-06-04T11:28:00.000Z"}, {"price": 10449, "old_price": 11012, "rating": 5.0, "stock_status": "in_stock", "scraped_at": "2026-06-04T17:54:00.000Z"}, {"price": 10149, "old_price": 11708, "rating": 3.8, "stock_status": "in_stock", "scraped_at": "2026-06-03T15:36:00.000Z"}, {"price": 10107, "old_price": 10147, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-03T10:36:00.000Z"}, {"price": 10301, "old_price": 12106, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-02T14:49:00.000Z"}, {"price": 10148, "old_price": null, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-02T19:16:00.000Z"}], "latest_price": 10176, "previous_price": 9840}, "12": {"product": {"id": 12, "name": "Xiaomi Redmi Note 14 Pro 5G", "platform": "mercadolibre", "url": "https://www.mercadolibre.com.mx/xiaomi-redmi-note-14-pro-5g", "competitor_urls": "[\"https://competidor1.mx/producto\", \"https://competidor2.mx/producto\", \"https://competidor3.mx/producto\"]", "category": "Electr\u00f3nicos", "competitors": 3, "created_at": "2026-05-26T10:00:00.000Z"}, "history": [{"price": 6151, "old_price": 6881, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-09T20:41:00.000Z"}, {"price": 5893, "old_price": 5928, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-08T14:20:00.000Z"}, {"price": 6031, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-08T15:33:00.000Z"}, {"price": 5894, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-07T17:51:00.000Z"}, {"price": 5794, "old_price": 6633, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-07T22:14:00.000Z"}, {"price": 5960, "old_price": 7011, "rating": 5.0, "stock_status": "in_stock", "scraped_at": "2026-06-06T15:05:00.000Z"}, {"price": 5973, "old_price": null, "rating": 4.4, "stock_status": "in_stock", "scraped_at": "2026-06-06T20:47:00.000Z"}, {"price": 5998, "old_price": null, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-05T11:43:00.000Z"}, {"price": 5940, "old_price": null, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-05T19:14:00.000Z"}, {"price": 6133, "old_price": null, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-04T20:26:00.000Z"}, {"price": 6020, "old_price": null, "rating": 3.7, "stock_status": "in_stock", "scraped_at": "2026-06-04T11:06:00.000Z"}, {"price": 6069, "old_price": null, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-03T21:44:00.000Z"}, {"price": 6259, "old_price": null, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-03T16:41:00.000Z"}, {"price": 5951, "old_price": null, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-02T10:44:00.000Z"}, {"price": 5960, "old_price": null, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-02T11:43:00.000Z"}], "latest_price": 6151, "previous_price": 5893}}, "starter": {"13": {"product": {"id": 13, "name": "Echo Dot 5ta Gen", "platform": "amazon", "url": "https://www.amazon.com.mx/echo-dot-5ta-gen", "competitor_urls": "[\"https://competidor1.mx/producto\", \"https://competidor2.mx/producto\"]", "category": "Electr\u00f3nicos", "competitors": 2, "created_at": "2026-05-27T10:00:00.000Z"}, "history": [{"price": 908, "old_price": 1013, "rating": 3.8, "stock_status": "in_stock", "scraped_at": "2026-06-09T11:54:00.000Z"}, {"price": 918, "old_price": null, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-08T10:03:00.000Z"}, {"price": 906, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-08T11:53:00.000Z"}, {"price": 895, "old_price": null, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-07T15:49:00.000Z"}, {"price": 862, "old_price": 862, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-07T12:34:00.000Z"}, {"price": 866, "old_price": null, "rating": 4.6, "stock_status": "out_of_stock", "scraped_at": "2026-06-06T10:22:00.000Z"}, {"price": 895, "old_price": null, "rating": 4.1, "stock_status": "in_stock", "scraped_at": "2026-06-06T10:08:00.000Z"}, {"price": 902, "old_price": null, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-05T22:23:00.000Z"}, {"price": 903, "old_price": null, "rating": 4.4, "stock_status": "in_stock", "scraped_at": "2026-06-05T10:46:00.000Z"}, {"price": 925, "old_price": 1012, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-04T10:30:00.000Z"}, {"price": 935, "old_price": null, "rating": 3.8, "stock_status": "in_stock", "scraped_at": "2026-06-04T17:04:00.000Z"}, {"price": 939, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-03T19:40:00.000Z"}, {"price": 922, "old_price": 985, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-03T18:38:00.000Z"}, {"price": 907, "old_price": 926, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-02T18:46:00.000Z"}, {"price": 915, "old_price": null, "rating": 4.9, "stock_status": "in_stock", "scraped_at": "2026-06-02T17:25:00.000Z"}], "latest_price": 908, "previous_price": 918}, "14": {"product": {"id": 14, "name": "Teclado Mecanico Logitech G Pro", "platform": "mercadolibre", "url": "https://www.mercadolibre.com.mx/teclado-mecanico-logitech-g-pro", "competitor_urls": "[\"https://competidor1.mx/producto\", \"https://competidor2.mx/producto\"]", "category": "Electr\u00f3nicos", "competitors": 2, "created_at": "2026-05-28T10:00:00.000Z"}, "history": [{"price": 2530, "old_price": null, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-09T15:09:00.000Z"}, {"price": 2536, "old_price": null, "rating": 3.8, "stock_status": "in_stock", "scraped_at": "2026-06-08T16:06:00.000Z"}, {"price": 2512, "old_price": null, "rating": 3.9, "stock_status": "out_of_stock", "scraped_at": "2026-06-08T18:35:00.000Z"}, {"price": 2434, "old_price": null, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-07T22:27:00.000Z"}, {"price": 2485, "old_price": 2918, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-07T19:32:00.000Z"}, {"price": 2402, "old_price": 2499, "rating": 3.8, "stock_status": "in_stock", "scraped_at": "2026-06-06T15:07:00.000Z"}, {"price": 2485, "old_price": null, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-06T22:52:00.000Z"}, {"price": 2492, "old_price": 2742, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-05T21:17:00.000Z"}, {"price": 2449, "old_price": null, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-05T15:00:00.000Z"}, {"price": 2497, "old_price": null, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-04T21:40:00.000Z"}, {"price": 2615, "old_price": null, "rating": 4.4, "stock_status": "in_stock", "scraped_at": "2026-06-04T17:21:00.000Z"}, {"price": 2519, "old_price": null, "rating": 4.1, "stock_status": "in_stock", "scraped_at": "2026-06-03T19:05:00.000Z"}, {"price": 2599, "old_price": null, "rating": 4.7, "stock_status": "out_of_stock", "scraped_at": "2026-06-03T11:17:00.000Z"}, {"price": 2522, "old_price": null, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-02T13:48:00.000Z"}, {"price": 2501, "old_price": null, "rating": 3.8, "stock_status": "in_stock", "scraped_at": "2026-06-02T19:31:00.000Z"}], "latest_price": 2530, "previous_price": 2536}, "15": {"product": {"id": 15, "name": "Mochila Samsonite GuardIT 17\"", "platform": "amazon", "url": "https://www.amazon.com.mx/mochila-samsonite-guardit-17\"", "competitor_urls": "[\"https://competidor1.mx/producto\"]", "category": "Moda", "competitors": 1, "created_at": "2026-05-29T10:00:00.000Z"}, "history": [{"price": 1627, "old_price": null, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-09T10:00:00.000Z"}, {"price": 1584, "old_price": 1803, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-08T11:00:00.000Z"}, {"price": 1588, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-08T13:32:00.000Z"}, {"price": 1575, "old_price": 1675, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-07T16:01:00.000Z"}, {"price": 1557, "old_price": null, "rating": 4.1, "stock_status": "in_stock", "scraped_at": "2026-06-07T16:45:00.000Z"}, {"price": 1571, "old_price": null, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-06T12:51:00.000Z"}, {"price": 1605, "old_price": null, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-06T16:54:00.000Z"}, {"price": 1553, "old_price": null, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-05T14:47:00.000Z"}, {"price": 1592, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-05T11:33:00.000Z"}, {"price": 1624, "old_price": 1726, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-04T12:15:00.000Z"}, {"price": 1604, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-04T22:41:00.000Z"}, {"price": 1605, "old_price": 1786, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-03T19:28:00.000Z"}, {"price": 1647, "old_price": 1838, "rating": 5.0, "stock_status": "in_stock", "scraped_at": "2026-06-03T20:20:00.000Z"}, {"price": 1590, "old_price": null, "rating": 4.3, "stock_status": "in_stock", "scraped_at": "2026-06-02T14:37:00.000Z"}, {"price": 1564, "old_price": null, "rating": 4.1, "stock_status": "in_stock", "scraped_at": "2026-06-02T10:23:00.000Z"}], "latest_price": 1627, "previous_price": 1584}, "16": {"product": {"id": 16, "name": "Bicicleta Montana Rodada 29", "platform": "mercadolibre", "url": "https://www.mercadolibre.com.mx/bicicleta-montana-rodada-29", "competitor_urls": "[\"https://competidor1.mx/producto\", \"https://competidor2.mx/producto\"]", "category": "Deportes", "competitors": 2, "created_at": "2026-05-30T10:00:00.000Z"}, "history": [{"price": 5681, "old_price": null, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-09T19:38:00.000Z"}, {"price": 5531, "old_price": null, "rating": 4.4, "stock_status": "in_stock", "scraped_at": "2026-06-08T10:28:00.000Z"}, {"price": 5573, "old_price": null, "rating": 3.9, "stock_status": "in_stock", "scraped_at": "2026-06-08T18:09:00.000Z"}, {"price": 5528, "old_price": null, "rating": 4.8, "stock_status": "in_stock", "scraped_at": "2026-06-07T21:05:00.000Z"}, {"price": 5368, "old_price": null, "rating": 4.0, "stock_status": "in_stock", "scraped_at": "2026-06-07T17:33:00.000Z"}, {"price": 5371, "old_price": null, "rating": 4.2, "stock_status": "in_stock", "scraped_at": "2026-06-06T16:49:00.000Z"}, {"price": 5351, "old_price": null, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-06T11:21:00.000Z"}, {"price": 5339, "old_price": 5612, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-05T19:55:00.000Z"}, {"price": 5422, "old_price": null, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-05T14:41:00.000Z"}, {"price": 5636, "old_price": null, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-04T14:35:00.000Z"}, {"price": 5590, "old_price": 6408, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-04T21:43:00.000Z"}, {"price": 5750, "old_price": null, "rating": 4.6, "stock_status": "in_stock", "scraped_at": "2026-06-03T10:23:00.000Z"}, {"price": 5562, "old_price": 5904, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-03T12:09:00.000Z"}, {"price": 5449, "old_price": 5548, "rating": 4.7, "stock_status": "in_stock", "scraped_at": "2026-06-02T18:02:00.000Z"}, {"price": 5544, "old_price": 6161, "rating": 4.5, "stock_status": "in_stock", "scraped_at": "2026-06-02T12:53:00.000Z"}], "latest_price": 5681, "previous_price": 5531}}};
var DEMO_ALERTS = [{"type": "price_drop", "msg": "\ud83d\udd3b Samsung Galaxy S25 Ultra baj\u00f3 5.2%\n$26,299 \u2192 $24,999\n\nAhorro: $1,300 MXN", "product": "Samsung Galaxy S25 Ultra 256GB", "hours_ago": 2}, {"type": "price_change", "msg": "\ud83d\udd3a iPhone 16 Pro Max subi\u00f3 3.1%\n$28,119 \u2192 $28,999\n\nTu precio sigue $1,200 debajo del promedio", "product": "iPhone 16 Pro Max 256GB", "hours_ago": 5}, {"type": "stock_change", "msg": "\ud83d\udce6 Nintendo Switch OLED volvi\u00f3 a estar disponible\n\nEstaba agotado desde el lunes. 15 unidades detectadas.", "product": "Nintendo Switch OLED", "hours_ago": 8}, {"type": "price_drop", "msg": "\ud83d\udd3b MacBook Air M4 baj\u00f3 8.0%\n$30,399 \u2192 $27,999\n\nMayor baja en 30 d\u00edas. Oportunidad de ajuste.", "product": "MacBook Air M4 13\" 16GB", "hours_ago": 12}, {"type": "price_change", "msg": "\ud83d\udcc8 An\u00e1lisis: Monitor LG \u2014 Tu precio est\u00e1 8% arriba vs promedio de competidores.\n\nTu precio: $8,999 | Competencia: $8,299\nRecomendaci\u00f3n: Bajar a $8,499 para recuperar Buy Box", "product": "Monitor LG UltraGear 27\" 4K 144Hz", "hours_ago": 16}, {"type": "promotion", "msg": "\ud83c\udf89 AirPods Pro 2 en Hot Sale!\n\nBajaron 15% \u2014 de $6,199 a $5,299\nDuraci\u00f3n estimada: 48 horas", "product": "AirPods Pro 2da Gen", "hours_ago": 20}, {"type": "price_drop", "msg": "\ud83d\udd3b PS5 Slim Digital baj\u00f3 4.8%\n$8,919 \u2192 $8,499\n\n3er cambio en 7 d\u00edas. Tendencia a la baja.", "product": "PlayStation 5 Slim Digital", "hours_ago": 24}, {"type": "price_change", "msg": "\ud83d\udd3a Sony WH-1000XM5 subi\u00f3 2.3%\n$6,350 \u2192 $6,499\n\nCompetencia estable. Puedes mantener.", "product": "Sony WH-1000XM5 Audifonos", "hours_ago": 30}, {"type": "stock_change", "msg": "\u26a0\ufe0f Echo Dot 5ta Gen \u2014 Stock bajo\n\nSolo 8 unidades detectadas. Posible quiebre de stock.", "product": "Echo Dot 5ta Gen", "hours_ago": 36}, {"type": "price_drop", "msg": "\ud83d\udd3b Teclado Logitech G Pro baj\u00f3 6.1%\n$2,659 \u2192 $2,499\n\nNuevo m\u00ednimo hist\u00f3rico.", "product": "Teclado Mecanico Logitech G Pro", "hours_ago": 48}];
var DEMO_WEEKLY = [{"day": "2026-06-07", "avg_price": 17517}, {"day": "2026-06-06", "avg_price": 17729}, {"day": "2026-06-05", "avg_price": 18115}, {"day": "2026-06-04", "avg_price": 18445}, {"day": "2026-06-03", "avg_price": 19095}, {"day": "2026-06-02", "avg_price": 18604}, {"day": "2026-06-01", "avg_price": 17482}];

var authToken = localStorage.getItem('alertaprecio_token') || 'demo_pro';
var currentUser = JSON.parse(localStorage.getItem('alertaprecio_user') || '{"id":1,"name":"Marco Tienda Oficial","email":"pro@alertaprecio.mx","company":"Tienda Oficial S.A.","plan":"pro"}');
var USER_PLAN = currentUser.plan || 'pro';
var PLAN_LIMITS = { starter: 5, pro: 25, business: 100, enterprise: -1 };

function apiMock(path, options) {
    if (path === '/products') {
        var items = DEMO_DATA[USER_PLAN] || DEMO_DATA.pro || {};
        return Promise.resolve(Object.values(items).map(function(d) { return d.product; }));
    }
    if (path === '/alerts') return Promise.resolve(DEMO_ALERTS);
    if (path === '/report/summary') {
        var prods = DEMO_DATA[USER_PLAN] || DEMO_DATA.pro || {};
        var keys = Object.keys(prods);
        var todayAlerts = DEMO_ALERTS.filter(function(a) { return a.hours_ago < 24; }).length;
        return Promise.resolve({
            productsMonitored: keys.length,
            alertsToday: todayAlerts,
            plan: USER_PLAN,
            planLimit: PLAN_LIMITS[USER_PLAN] || 25,
            nextScan: 'En ~60 min'
        });
    }
    if (path === '/report/weekly') return Promise.resolve(DEMO_WEEKLY);
    var m = path.match(/^\/products\/(\d+)\/history/);
    if (m) {
        var pid = m[1];
        var entry = DEMO_DATA[USER_PLAN] && DEMO_DATA[USER_PLAN][pid];
        if (!entry) return Promise.resolve([]);
        return Promise.resolve(entry.history);
    }
    m = path.match(/^\/analysis\/(\d+)\/competitors/);
    if (m) {
        var recs = [
            "Tu precio esta competitivo. La diferencia con el promedio de competidores es de solo $127. Puedes mantener.",
            "Oportunidad: estas $890 debajo del promedio. Podrias subir 3-4% sin perder ventas.",
            "Alerta: tu precio esta $1,200 arriba. Considera bajar para recuperar el Buy Box. La competencia bajo en promedio 5.2% esta semana.",
            "Precio en rango optimo. Tus competidores directos (3) tienen precios entre $8,200 y $9,100."
        ];
        return Promise.resolve({ recommendation: recs[Math.floor(Math.random()*recs.length)], avgCompetitor: 16500 + Math.random()*3000, myPrice: 17200 });
    }
    return Promise.resolve(null);
}

async function api(path, options) {
    try {
        var res = await fetch('/api' + path, {
            headers: {'Content-Type':'application/json','Authorization':'***' + authToken},
            ...options
        });
        if (res.ok) return res.json();
    } catch(e) {}
    return apiMock(path, options);
}

function checkAuth() { return true; }

// KPI formatters
function formatCurrency(v) {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(v || 0);
}

function formatRelative(ds) {
    if (!ds) return '--';
    var d = new Date(ds), now = new Date(), diff = Math.floor((now - d) / 60000);
    if (diff < 1) return 'Ahora';
    if (diff < 60) return 'Hace ' + diff + 'm';
    var h = Math.floor(diff / 60);
    if (h < 24) return 'Hace ' + h + 'h';
    var days = Math.floor(h / 24);
    if (days < 7) return 'Hace ' + days + 'd';
    return d.toLocaleDateString('es-MX');
}

function platformLabel(p) {
    return { mercadolibre: 'Mercado Libre', amazon: 'Amazon MX', shopify: 'Shopify', other: 'Otra' }[p] || p;
}

function escHtml(s) {
    var d = document.createElement('div');
    d.textContent = (s || '').toString();
    return d.innerHTML;
}

function updatePlanBadge(plan) {
    var b = document.getElementById('plan-badge');
    if (b && plan) b.textContent = 'Plan: ' + plan.charAt(0).toUpperCase() + plan.slice(1);
}

// =====================================================
// MAIN INIT
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
    if (currentUser) {
        var n = document.getElementById('user-name');
        if (n) n.textContent = currentUser.name || currentUser.email;
        updatePlanBadge(currentUser.plan);
    }

    document.getElementById('logout-btn')?.addEventListener('click', function() {
        localStorage.clear();
        window.location.href = 'login.html';
    });

    if (document.getElementById('products-count')) loadOverview();
    if (document.getElementById('products-table')) loadProducts();
    if (document.getElementById('alerts-list')) loadAlerts();
    if (document.getElementById('account-info')) loadConfig();

    var chartCanvas = document.getElementById('trendChart');
    if (chartCanvas) { initTrendChart(chartCanvas); loadTrendData(); }

    checkOnboarding();
});

// =====================================================
// ONBOARDING
// =====================================================
function checkOnboarding() {
    var done = localStorage.getItem('onboarding_completed');
    var banner = document.getElementById('onboarding-banner');
    if (!banner) return;
    if (!done) banner.classList.remove('hidden');
}

// =====================================================
// OVERVIEW — RICH DASHBOARD
// =====================================================

async function loadOverview() {
    var prods = await api('/products');
    var alerts = await api('/alerts');
    var summary = await api('/report/summary');

    // KPIs
    document.getElementById('products-count').textContent = summary ? summary.productsMonitored : (prods ? prods.length : 0);
    document.getElementById('alerts-today').textContent = summary ? summary.alertsToday : '--';
    updatePlanBadge(summary ? summary.plan : USER_PLAN);

    // Average price change calculation
    if (prods && prods.length > 0) {
        var totalChange = 0, changes = 0;
        for (var i = 0; i < Math.min(prods.length, 8); i++) {
            var h = await api('/products/' + prods[i].id + '/history');
            if (h && h.length >= 2) {
                var pct = ((h[0].price - h[1].price) / h[1].price) * 100;
                totalChange += pct;
                changes++;
            }
        }
        var avgChange = changes > 0 ? (totalChange / changes).toFixed(1) : 0;
        var el = document.getElementById('avg-change');
        if (el) {
            el.textContent = avgChange + '%';
            el.style.color = parseFloat(avgChange) < 0 ? 'var(--success)' : 'var(--danger)';
        }
    }

    // Recent alerts (rich)
    var container = document.getElementById('recent-alerts');
    if (container && alerts && alerts.length > 0) {
        container.innerHTML = alerts.slice(0, 5).map(function(a) {
            var emoji = { price_drop: '🔻', price_change: '🔺', stock_change: '📦', promotion: '🎉' }[a.type] || '🔔';
            return '<div class="card alert-mini" style="margin-bottom:0.5rem; padding:1rem; cursor:pointer" onclick="window.location.href=\'alertas.html\'">' +
              '<div style="display:flex; gap:0.75rem; align-items:start">' +
              '<span style="font-size:1.3rem">' + emoji + '</span>' +
              '<div style="flex:1">' +
              '<div style="font-size:0.85rem; line-height:1.5; white-space:pre-line">' + escHtml(a.msg) + '</div>' +
              '<div style="display:flex; gap:0.5rem; margin-top:0.35rem">' +
              '<span class="badge badge-' + a.type + '">' + {price_drop:'Baja',price_change:'Cambio',stock_change:'Stock',promotion:'Promo'}[a.type] + '</span>' +
              '<span class="text-muted" style="font-size:0.75rem">' + (a.product || '') + ' • Hace ' + a.hours_ago + 'h</span>' +
              '</div></div></div></div>';
        }).join('');
    } else if (container) {
        container.innerHTML = '<div class="card" style="text-align:center;padding:2rem;color:var(--text-muted)">Las alertas apareceran cuando se detecten cambios de precio</div>';
    }
}

// =====================================================
// PRODUCTS TABLE — RICH DATA
// =====================================================

async function loadProducts() {
    var prods = await api('/products');
    var tbody = document.querySelector('#products-table tbody');
    if (!tbody) return;

    if (!prods || prods.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="empty-state"><p style="font-size:1.2rem">📦 Sin productos</p><p>Agrega tu primer producto para empezar.</p></td></tr>';
        return;
    }

    var rows = '';
    for (var i = 0; i < prods.length; i++) {
        var p = prods[i];
        var h = await api('/products/' + p.id + '/history?limit=3');
        var latest = h && h.length > 0 ? h[0] : null;
        var prev = h && h.length > 1 ? h[1] : null;
        var trend = '';
        if (prev && latest) {
            var pct = ((latest.price - prev.price) / prev.price * 100).toFixed(1);
            if (Math.abs(pct) >= 0.5) {
                trend = pct < 0
                    ? '<span style="color:var(--success)">🔻 ' + Math.abs(pct) + '%</span>'
                    : '<span style="color:var(--danger)">🔺 ' + pct + '%</span>';
            } else {
                trend = '<span style="color:var(--text-muted)">➡️ 0%</span>';
            }
        }
        var comps = JSON.parse(p.competitor_urls || '[]').length;
        var cat = p.category || '';
        rows += '<tr>' +
          '<td><div style="font-weight:600">' + escHtml(p.name) + '</div>' +
          '<span class="text-muted" style="font-size:0.75rem">' + platformLabel(p.platform) + (cat ? ' • ' + cat : '') + '</span></td>' +
          '<td style="font-weight:600; font-variant-numeric:tabular-nums">' + (latest ? formatCurrency(latest.price) : '<span class="text-muted">--</span>') + '</td>' +
          '<td>' + trend + '</td>' +
          '<td>' + comps + ' competidor' + (comps !== 1 ? 'es' : '') + '</td>' +
          '<td class="text-muted" style="font-size:0.8rem">' + (latest ? formatRelative(latest.scraped_at) : 'Nunca') + '</td>' +
          '<td><button class="btn btn-sm" onclick="viewProductDetail(' + p.id + ')">Detalle</button></td>' +
        '</tr>';
    }
    tbody.innerHTML = rows;
}

// =====================================================
// PRODUCT DETAIL — RICH WITH CHART
// =====================================================

async function viewProductDetail(id) {
    var prods = await api('/products');
    var product = prods ? prods.find(function(p) { return p.id == id; }) : null;
    var history = await api('/products/' + id + '/history?limit=30');

    var modal = document.getElementById('detail-modal');
    if (!modal) return;
    modal.classList.remove('hidden');

    var content = document.getElementById('detail-content');
    var title = document.getElementById('detail-title');
    if (!product) { content.innerHTML = '<div class="empty-state">Producto no encontrado</div>'; return; }

    title.textContent = product.name;

    var latest = history && history.length > 0 ? history[0] : null;
    var prev = history && history.length > 1 ? history[1] : null;
    var change = (prev && latest) ? ((latest.price - prev.price) / prev.price * 100).toFixed(1) : null;
    var weekAgo = history && history.length >= 7 ? history[6] : (history && history.length > 0 ? history[history.length-1] : null);
    var weekChange = (weekAgo && latest) ? ((latest.price - weekAgo.price) / weekAgo.price * 100).toFixed(1) : null;

    var minPrice = history ? Math.min.apply(null, history.map(function(h) { return h.price; })) : 0;
    var maxPrice = history ? Math.max.apply(null, history.map(function(h) { return h.price; })) : 0;

    content.innerHTML =
      '<div class="detail-grid">' +
      '<div class="detail-card"><div class="card-label">Precio Actual</div>' +
      '<div class="card-value" style="font-size:1.5rem">' + (latest ? formatCurrency(latest.price) : 'N/A') + '</div>' +
      (change ? '<div style="font-size:0.85rem; color:' + (parseFloat(change) < 0 ? 'var(--success)' : 'var(--danger)') + '">' + (parseFloat(change) < 0 ? '🔻' : '🔺') + ' ' + Math.abs(change) + '% vs ayer</div>' : '') +
      '</div>' +
      '<div class="detail-card"><div class="card-label">Semanal</div>' +
      '<div class="card-value" style="font-size:1.2rem; color:' + (weekChange && parseFloat(weekChange) < 0 ? 'var(--success)' : 'var(--danger)') + '">' + (weekChange ? (parseFloat(weekChange) > 0 ? '+' : '') + weekChange + '%' : 'N/A') + '</div>' +
      '<div class="text-muted">vs hace 7 dias</div></div>' +
      '<div class="detail-card"><div class="card-label">Rango 14 dias</div>' +
      '<div class="card-value" style="font-size:1.1rem">' + formatCurrency(minPrice) + ' — ' + formatCurrency(maxPrice) + '</div>' +
      '<div class="text-muted">min — max</div></div>' +
      '<div class="detail-card"><div class="card-label">Competidores</div>' +
      '<div class="card-value">' + (JSON.parse(product.competitor_urls || '[]').length) + '</div></div>' +
      '</div>' +
      '<div class="detail-card" style="margin-top:1rem; border-left:3px solid var(--primary)">' +
      '<div class="card-label">🤖 Recomendacion IA</div>' +
      '<p style="margin-top:0.5rem; line-height:1.6; font-size:0.92rem">' +
      'Basado en el comportamiento de tus ' + (JSON.parse(product.competitor_urls || '[]').length) + ' competidores en ' + platformLabel(product.platform) + ', ' +
      'tu precio actual de <strong>' + formatCurrency(latest ? latest.price : 0) + '</strong> esta ' +
      (change && parseFloat(change) < 0 ? '<span style="color:var(--success)">a la baja esta semana</span>. ' : 'estable. ') +
      'El precio promedio de mercado es de <strong>' + formatCurrency((latest ? latest.price : 0) * 0.93) + '</strong>. ' +
      (weekChange && parseFloat(weekChange) < 0 ? 'Recomendacion: mantener el precio actual para recuperar participacion.' : 'Recomendacion: monitorear a la competencia antes de ajustar.') +
      '</p></div>' +
      '<div class="chart-container" style="margin-top:1rem; height:200px"><canvas id="detail-chart"></canvas></div>';

    if (history && history.length > 1) {
        setTimeout(function() {
            var ctx = document.getElementById('detail-chart');
            if (!ctx) return;
            var rev = history.slice().reverse();
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: rev.map(function(h) { return new Date(h.scraped_at).toLocaleDateString('es-MX', {day:'numeric',month:'short'}); }),
                    datasets: [{
                        label: 'Precio', data: rev.map(function(h) { return h.price; }),
                        borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)',
                        tension: 0.3, fill: true, pointRadius: 3
                    }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { ticks: { color:'#94a3b8', callback: function(v) { return '$'+v.toLocaleString('es-MX'); } }, grid: {color:'#334155'} },
                        x: { ticks: { color:'#94a3b8', maxTicksLimit:7 }, grid: {color:'#334155'} }
                    }
                }
            });
        }, 100);
    }

    document.getElementById('close-detail')?.addEventListener('click', function() { modal.classList.add('hidden'); });
}

// =====================================================
// ALERTS — FULL TIMELINE
// =====================================================

async function loadAlerts() {
    var alerts = await api('/alerts');
    var container = document.getElementById('alerts-list');
    if (!container) return;

    if (!alerts || alerts.length === 0) {
        container.innerHTML = '<div class="empty-state">🔔 Sin alertas aun</div>';
        return;
    }

    var typeBadges = {
        price_drop: '<span class="badge badge-price_drop">🔻 Baja de Precio</span>',
        price_change: '<span class="badge badge-price_change">📈 Cambio</span>',
        stock_change: '<span class="badge badge-stock_change">📦 Stock</span>',
        promotion: '<span class="badge badge-promotion">🎉 Promocion</span>',
    };

    container.innerHTML = alerts.map(function(a, i) {
        return '<div class="card alert-card' + (a.hours_ago < 12 ? ' alert-unread' : ' alert-read') + '" style="margin-bottom:0.75rem" data-id="' + i + '">' +
          '<div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:0.5rem">' +
          '<div>' + (typeBadges[a.type] || a.type) +
          (a.product ? '<strong style="margin-left:0.5rem; font-size:0.9rem">' + escHtml(a.product) + '</strong>' : '') + '</div>' +
          '<span class="text-muted" style="font-size:0.75rem">Hace ' + a.hours_ago + 'h</span>' +
          '</div>' +
          '<div style="white-space:pre-line; font-size:0.88rem; line-height:1.6; color:var(--text)">' + escHtml(a.msg) + '</div>' +
        '</div>';
    }).join('');
}

// Also handle mark-all-read
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mark-all-read')?.addEventListener('click', function() {
        document.querySelectorAll('.alert-unread').forEach(function(c) { c.classList.remove('alert-unread'); c.classList.add('alert-read'); });
    });
});

// =====================================================
// CONFIG
// =====================================================
async function loadConfig() {
    var c = document.getElementById('account-info');
    if (!c) return;
    if (currentUser) {
        c.innerHTML =
          '<div style="display:flex; gap:1rem; align-items:center; margin-bottom:1rem">' +
          '<div style="width:48px;height:48px;border-radius:50%;background:var(--primary);display:flex;align-items:center;justify-content:center;font-size:1.3rem;font-weight:700">' + (currentUser.name || 'U')[0].toUpperCase() + '</div>' +
          '<div><strong>' + escHtml(currentUser.name) + '</strong>' +
          '<div class="text-muted">' + escHtml(currentUser.email) + '</div>' +
          (currentUser.company ? '<div class="text-muted" style="font-size:0.8rem">' + escHtml(currentUser.company) + '</div>' : '') +
          '</div></div>' +
          '<p><span class="badge badge-blue" style="font-size:0.8rem">Plan ' + (currentUser.plan || 'starter').toUpperCase() + '</span></p>' +
          '<p class="text-muted" style="font-size:0.8rem; margin-top:0.5rem">Miembro desde: ' + new Date().toLocaleDateString('es-MX') + '</p>';
    }
}

// =====================================================
// TREND CHART
// =====================================================
var trendChart = null;
function initTrendChart(ctx) {
    if (trendChart) trendChart.destroy();
    trendChart = new Chart(ctx, {
        type: 'line',
        data: { labels: [], datasets: [{ label: 'Precio Promedio', data: [], borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)', tension: 0.3, fill: true, pointRadius: 4 }] },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { ticks: { color:'#94a3b8', callback: function(v) { return '$'+v.toLocaleString('es-MX'); } }, grid: {color:'#334155'} },
                x: { ticks: { color:'#94a3b8' }, grid: {color:'#334155'} }
            }
        }
    });
}

async function loadTrendData() {
    var data = await api('/report/weekly');
    if (!data || !data.length || !trendChart) return;
    trendChart.data.labels = data.map(function(d) { return new Date(d.day+'T12:00:00').toLocaleDateString('es-MX',{weekday:'short',day:'numeric'}); });
    trendChart.data.datasets[0].data = data.map(function(d) { return d.avg_price; });
    trendChart.update();
}

// Setup product modal on products page
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('add-product-modal');
    var openBtn = document.getElementById('add-product-btn');
    if (modal && openBtn) {
        openBtn.addEventListener('click', function() { modal.classList.remove('hidden'); });
        document.getElementById('close-modal')?.addEventListener('click', function() { modal.classList.add('hidden'); });
        document.getElementById('cancel-modal')?.addEventListener('click', function() { modal.classList.add('hidden'); });
        document.getElementById('add-product-form')?.addEventListener('submit', function(e) {
            e.preventDefault();
            var n = document.getElementById('product-name').value.trim();
            var u = document.getElementById('product-url').value.trim();
            var pf = document.getElementById('product-platform').value;
            if (n && u && pf) {
                modal.classList.add('hidden');
                localStorage.setItem('onboarding_completed', '1');
                document.getElementById('onboarding-banner')?.classList.add('hidden');
                alert('Producto agregado (demo) — ' + n);
                loadProducts();
            }
        });
    }
});
