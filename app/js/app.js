/**
 * AlertaPrecio MX — Static Demo (GitHub Pages)
 * Sin backend, usa datos demo embebidos.
 */

// Embedded demo data (generated from seed_realista.js)
var DEMO_DATA = {"pro": {"1": {"product": {"id": 1, "name": "Samsung Galaxy S25 Ultra 256GB", "platform": "mercadolibre", "competitor_urls": "[\"comp1\",\"comp2\"]", "basePrice": 24999}, "history": [{"price": 24788, "old_price": null, "scraped_at": "2026-04-15T10:00:00.000Z"}, {"price": 25041, "old_price": 25296, "scraped_at": "2026-05-14T10:00:00.000Z"}, {"price": 24486, "old_price": 25076, "scraped_at": "2026-05-13T10:00:00.000Z"}, {"price": 24833, "old_price": null, "scraped_at": "2026-05-12T10:00:00.000Z"}, {"price": 25142, "old_price": null, "scraped_at": "2026-05-11T10:00:00.000Z"}, {"price": 24924, "old_price": null, "scraped_at": "2026-05-10T10:00:00.000Z"}, {"price": 25301, "old_price": 26333, "scraped_at": "2026-05-09T10:00:00.000Z"}, {"price": 25511, "old_price": null, "scraped_at": "2026-05-08T10:00:00.000Z"}, {"price": 24474, "old_price": 26674, "scraped_at": "2026-06-07T10:00:00.000Z"}, {"price": 24880, "old_price": 25322, "scraped_at": "2026-06-06T10:00:00.000Z"}, {"price": 26104, "old_price": null, "scraped_at": "2026-06-05T10:00:00.000Z"}, {"price": 26198, "old_price": null, "scraped_at": "2026-06-04T10:00:00.000Z"}, {"price": 25427, "old_price": null, "scraped_at": "2026-06-03T10:00:00.000Z"}, {"price": 25025, "old_price": null, "scraped_at": "2026-06-02T10:00:00.000Z"}, {"price": 24718, "old_price": null, "scraped_at": "2026-06-01T10:00:00.000Z"}], "latest_price": 24788, "previous_price": 25041}, "2": {"product": {"id": 2, "name": "iPhone 16 Pro Max 256GB", "platform": "mercadolibre", "competitor_urls": "[\"comp1\"]", "basePrice": 28999}, "history": [{"price": 29699, "old_price": 30817, "scraped_at": "2026-04-15T10:00:00.000Z"}, {"price": 28288, "old_price": null, "scraped_at": "2026-05-14T10:00:00.000Z"}, {"price": 28291, "old_price": 31817, "scraped_at": "2026-05-13T10:00:00.000Z"}, {"price": 27918, "old_price": null, "scraped_at": "2026-05-12T10:00:00.000Z"}, {"price": 28492, "old_price": null, "scraped_at": "2026-05-11T10:00:00.000Z"}, {"price": 27570, "old_price": null, "scraped_at": "2026-05-10T10:00:00.000Z"}, {"price": 28594, "old_price": null, "scraped_at": "2026-05-09T10:00:00.000Z"}, {"price": 29465, "old_price": 32029, "scraped_at": "2026-05-08T10:00:00.000Z"}, {"price": 29031, "old_price": 31492, "scraped_at": "2026-06-07T10:00:00.000Z"}, {"price": 28709, "old_price": null, "scraped_at": "2026-06-06T10:00:00.000Z"}, {"price": 28857, "old_price": 31487, "scraped_at": "2026-06-05T10:00:00.000Z"}, {"price": 30111, "old_price": null, "scraped_at": "2026-06-04T10:00:00.000Z"}, {"price": 29320, "old_price": null, "scraped_at": "2026-06-03T10:00:00.000Z"}, {"price": 29359, "old_price": null, "scraped_at": "2026-06-02T10:00:00.000Z"}, {"price": 29421, "old_price": 32925, "scraped_at": "2026-06-01T10:00:00.000Z"}], "latest_price": 29699, "previous_price": 28288}, "3": {"product": {"id": 3, "name": "Nintendo Switch OLED", "platform": "amazon", "competitor_urls": "[\"comp1\",\"comp2\"]", "basePrice": 6799}, "history": [{"price": 6897, "old_price": null, "scraped_at": "2026-04-15T10:00:00.000Z"}, {"price": 6818, "old_price": null, "scraped_at": "2026-05-14T10:00:00.000Z"}, {"price": 6847, "old_price": null, "scraped_at": "2026-05-13T10:00:00.000Z"}, {"price": 6806, "old_price": null, "scraped_at": "2026-05-12T10:00:00.000Z"}, {"price": 6760, "old_price": null, "scraped_at": "2026-05-11T10:00:00.000Z"}, {"price": 6860, "old_price": 6879, "scraped_at": "2026-05-10T10:00:00.000Z"}, {"price": 6612, "old_price": null, "scraped_at": "2026-05-09T10:00:00.000Z"}, {"price": 6693, "old_price": null, "scraped_at": "2026-05-08T10:00:00.000Z"}, {"price": 6755, "old_price": null, "scraped_at": "2026-06-07T10:00:00.000Z"}, {"price": 6823, "old_price": null, "scraped_at": "2026-06-06T10:00:00.000Z"}, {"price": 6940, "old_price": null, "scraped_at": "2026-06-05T10:00:00.000Z"}, {"price": 7128, "old_price": null, "scraped_at": "2026-06-04T10:00:00.000Z"}, {"price": 6867, "old_price": null, "scraped_at": "2026-06-03T10:00:00.000Z"}, {"price": 6790, "old_price": null, "scraped_at": "2026-06-02T10:00:00.000Z"}, {"price": 6999, "old_price": 7623, "scraped_at": "2026-06-01T10:00:00.000Z"}], "latest_price": 6897, "previous_price": 6818}, "4": {"product": {"id": 4, "name": "MacBook Air M4 13 16GB", "platform": "mercadolibre", "competitor_urls": "[]", "basePrice": 27999}, "history": [{"price": 27996, "old_price": null, "scraped_at": "2026-04-15T10:00:00.000Z"}, {"price": 28185, "old_price": null, "scraped_at": "2026-05-14T10:00:00.000Z"}, {"price": 27609, "old_price": null, "scraped_at": "2026-05-13T10:00:00.000Z"}, {"price": 27174, "old_price": null, "scraped_at": "2026-05-12T10:00:00.000Z"}, {"price": 27953, "old_price": null, "scraped_at": "2026-05-11T10:00:00.000Z"}, {"price": 27844, "old_price": null, "scraped_at": "2026-05-10T10:00:00.000Z"}, {"price": 27104, "old_price": null, "scraped_at": "2026-05-09T10:00:00.000Z"}, {"price": 27197, "old_price": null, "scraped_at": "2026-05-08T10:00:00.000Z"}, {"price": 28325, "old_price": null, "scraped_at": "2026-06-07T10:00:00.000Z"}, {"price": 28653, "old_price": null, "scraped_at": "2026-06-06T10:00:00.000Z"}, {"price": 28521, "old_price": null, "scraped_at": "2026-06-05T10:00:00.000Z"}, {"price": 29199, "old_price": null, "scraped_at": "2026-06-04T10:00:00.000Z"}, {"price": 27940, "old_price": 28225, "scraped_at": "2026-06-03T10:00:00.000Z"}, {"price": 28775, "old_price": null, "scraped_at": "2026-06-02T10:00:00.000Z"}, {"price": 27865, "old_price": null, "scraped_at": "2026-06-01T10:00:00.000Z"}], "latest_price": 27996, "previous_price": 28185}, "5": {"product": {"id": 5, "name": "AirPods Pro 2", "platform": "amazon", "competitor_urls": "[\"comp1\"]", "basePrice": 5299}, "history": [{"price": 5499, "old_price": 6024, "scraped_at": "2026-04-15T10:00:00.000Z"}, {"price": 5248, "old_price": 5797, "scraped_at": "2026-05-14T10:00:00.000Z"}, {"price": 5405, "old_price": null, "scraped_at": "2026-05-13T10:00:00.000Z"}, {"price": 5273, "old_price": 5760, "scraped_at": "2026-05-12T10:00:00.000Z"}, {"price": 5275, "old_price": null, "scraped_at": "2026-05-11T10:00:00.000Z"}, {"price": 5061, "old_price": null, "scraped_at": "2026-05-10T10:00:00.000Z"}, {"price": 5364, "old_price": 5819, "scraped_at": "2026-05-09T10:00:00.000Z"}, {"price": 5419, "old_price": null, "scraped_at": "2026-05-08T10:00:00.000Z"}, {"price": 5313, "old_price": null, "scraped_at": "2026-06-07T10:00:00.000Z"}, {"price": 5398, "old_price": null, "scraped_at": "2026-06-06T10:00:00.000Z"}, {"price": 5479, "old_price": null, "scraped_at": "2026-06-05T10:00:00.000Z"}, {"price": 5509, "old_price": null, "scraped_at": "2026-06-04T10:00:00.000Z"}, {"price": 5338, "old_price": null, "scraped_at": "2026-06-03T10:00:00.000Z"}, {"price": 5221, "old_price": null, "scraped_at": "2026-06-02T10:00:00.000Z"}, {"price": 5347, "old_price": 5987, "scraped_at": "2026-06-01T10:00:00.000Z"}], "latest_price": 5499, "previous_price": 5248}, "6": {"product": {"id": 6, "name": "Monitor LG UltraGear 27 4K", "platform": "mercadolibre", "competitor_urls": "[\"comp1\"]", "basePrice": 8999}, "history": [{"price": 9148, "old_price": null, "scraped_at": "2026-04-15T10:00:00.000Z"}, {"price": 9019, "old_price": 10111, "scraped_at": "2026-05-14T10:00:00.000Z"}, {"price": 9136, "old_price": 9560, "scraped_at": "2026-05-13T10:00:00.000Z"}, {"price": 8979, "old_price": 9030, "scraped_at": "2026-05-12T10:00:00.000Z"}, {"price": 8791, "old_price": null, "scraped_at": "2026-05-11T10:00:00.000Z"}, {"price": 8610, "old_price": 9509, "scraped_at": "2026-05-10T10:00:00.000Z"}, {"price": 9006, "old_price": null, "scraped_at": "2026-05-09T10:00:00.000Z"}, {"price": 8758, "old_price": 9289, "scraped_at": "2026-05-08T10:00:00.000Z"}, {"price": 8826, "old_price": 9336, "scraped_at": "2026-06-07T10:00:00.000Z"}, {"price": 9058, "old_price": null, "scraped_at": "2026-06-06T10:00:00.000Z"}, {"price": 8988, "old_price": 9661, "scraped_at": "2026-06-05T10:00:00.000Z"}, {"price": 9317, "old_price": null, "scraped_at": "2026-06-04T10:00:00.000Z"}, {"price": 9372, "old_price": null, "scraped_at": "2026-06-03T10:00:00.000Z"}, {"price": 9294, "old_price": null, "scraped_at": "2026-06-02T10:00:00.000Z"}, {"price": 8740, "old_price": null, "scraped_at": "2026-06-01T10:00:00.000Z"}], "latest_price": 9148, "previous_price": 9019}, "7": {"product": {"id": 7, "name": "Sony WH-1000XM5", "platform": "mercadolibre", "competitor_urls": "[\"comp1\"]", "basePrice": 6499}, "history": [{"price": 6467, "old_price": null, "scraped_at": "2026-04-15T10:00:00.000Z"}, {"price": 6426, "old_price": 6691, "scraped_at": "2026-05-14T10:00:00.000Z"}, {"price": 6297, "old_price": 6914, "scraped_at": "2026-05-13T10:00:00.000Z"}, {"price": 6480, "old_price": null, "scraped_at": "2026-05-12T10:00:00.000Z"}, {"price": 6415, "old_price": 7231, "scraped_at": "2026-05-11T10:00:00.000Z"}, {"price": 6445, "old_price": 6885, "scraped_at": "2026-05-10T10:00:00.000Z"}, {"price": 6471, "old_price": null, "scraped_at": "2026-05-09T10:00:00.000Z"}, {"price": 6284, "old_price": null, "scraped_at": "2026-05-08T10:00:00.000Z"}, {"price": 6528, "old_price": null, "scraped_at": "2026-06-07T10:00:00.000Z"}, {"price": 6615, "old_price": null, "scraped_at": "2026-06-06T10:00:00.000Z"}, {"price": 6776, "old_price": 7014, "scraped_at": "2026-06-05T10:00:00.000Z"}, {"price": 6703, "old_price": 6944, "scraped_at": "2026-06-04T10:00:00.000Z"}, {"price": 6677, "old_price": null, "scraped_at": "2026-06-03T10:00:00.000Z"}, {"price": 6737, "old_price": null, "scraped_at": "2026-06-02T10:00:00.000Z"}, {"price": 6616, "old_price": 7153, "scraped_at": "2026-06-01T10:00:00.000Z"}], "latest_price": 6467, "previous_price": 6426}, "8": {"product": {"id": 8, "name": "PlayStation 5 Slim Digital", "platform": "amazon", "competitor_urls": "[\"comp1\"]", "basePrice": 8499}, "history": [{"price": 8681, "old_price": 9543, "scraped_at": "2026-04-15T10:00:00.000Z"}, {"price": 8612, "old_price": 8917, "scraped_at": "2026-05-14T10:00:00.000Z"}, {"price": 8388, "old_price": 8491, "scraped_at": "2026-05-13T10:00:00.000Z"}, {"price": 8415, "old_price": 8519, "scraped_at": "2026-05-12T10:00:00.000Z"}, {"price": 8089, "old_price": null, "scraped_at": "2026-05-11T10:00:00.000Z"}, {"price": 8212, "old_price": 8840, "scraped_at": "2026-05-10T10:00:00.000Z"}, {"price": 8163, "old_price": null, "scraped_at": "2026-05-09T10:00:00.000Z"}, {"price": 8228, "old_price": 9015, "scraped_at": "2026-05-08T10:00:00.000Z"}, {"price": 8568, "old_price": 9212, "scraped_at": "2026-06-07T10:00:00.000Z"}, {"price": 8802, "old_price": null, "scraped_at": "2026-06-06T10:00:00.000Z"}, {"price": 8880, "old_price": null, "scraped_at": "2026-06-05T10:00:00.000Z"}, {"price": 8642, "old_price": 9765, "scraped_at": "2026-06-04T10:00:00.000Z"}, {"price": 8848, "old_price": null, "scraped_at": "2026-06-03T10:00:00.000Z"}, {"price": 8640, "old_price": 9365, "scraped_at": "2026-06-02T10:00:00.000Z"}, {"price": 8282, "old_price": null, "scraped_at": "2026-06-01T10:00:00.000Z"}], "latest_price": 8681, "previous_price": 8612}}, "starter": {"9": {"product": {"id": 9, "name": "Cafetera Nespresso Vertuo Next", "platform": "amazon", "competitor_urls": "[]", "basePrice": 3299}, "history": [{"price": 3422, "old_price": null, "scraped_at": "2026-04-15T10:00:00.000Z"}, {"price": 3250, "old_price": null, "scraped_at": "2026-05-14T10:00:00.000Z"}, {"price": 3215, "old_price": null, "scraped_at": "2026-05-13T10:00:00.000Z"}, {"price": 3245, "old_price": 3546, "scraped_at": "2026-05-12T10:00:00.000Z"}, {"price": 3247, "old_price": null, "scraped_at": "2026-05-11T10:00:00.000Z"}, {"price": 3190, "old_price": null, "scraped_at": "2026-05-10T10:00:00.000Z"}, {"price": 3223, "old_price": null, "scraped_at": "2026-05-09T10:00:00.000Z"}, {"price": 3234, "old_price": null, "scraped_at": "2026-05-08T10:00:00.000Z"}, {"price": 3320, "old_price": null, "scraped_at": "2026-06-07T10:00:00.000Z"}, {"price": 3267, "old_price": null, "scraped_at": "2026-06-06T10:00:00.000Z"}, {"price": 3297, "old_price": null, "scraped_at": "2026-06-05T10:00:00.000Z"}, {"price": 3332, "old_price": null, "scraped_at": "2026-06-04T10:00:00.000Z"}, {"price": 3284, "old_price": 3439, "scraped_at": "2026-06-03T10:00:00.000Z"}, {"price": 3306, "old_price": null, "scraped_at": "2026-06-02T10:00:00.000Z"}, {"price": 3281, "old_price": null, "scraped_at": "2026-06-01T10:00:00.000Z"}], "latest_price": 3422, "previous_price": 3250}, "10": {"product": {"id": 10, "name": "Silla Gamer Corsair T3 Rush", "platform": "mercadolibre", "competitor_urls": "[\"comp1\"]", "basePrice": 7999}, "history": [{"price": 8161, "old_price": null, "scraped_at": "2026-04-15T10:00:00.000Z"}, {"price": 7972, "old_price": null, "scraped_at": "2026-05-14T10:00:00.000Z"}, {"price": 7840, "old_price": null, "scraped_at": "2026-05-13T10:00:00.000Z"}, {"price": 7965, "old_price": null, "scraped_at": "2026-05-12T10:00:00.000Z"}, {"price": 7613, "old_price": null, "scraped_at": "2026-05-11T10:00:00.000Z"}, {"price": 8068, "old_price": null, "scraped_at": "2026-05-10T10:00:00.000Z"}, {"price": 8088, "old_price": null, "scraped_at": "2026-05-09T10:00:00.000Z"}, {"price": 8164, "old_price": null, "scraped_at": "2026-05-08T10:00:00.000Z"}, {"price": 8129, "old_price": null, "scraped_at": "2026-06-07T10:00:00.000Z"}, {"price": 8019, "old_price": null, "scraped_at": "2026-06-06T10:00:00.000Z"}, {"price": 7948, "old_price": null, "scraped_at": "2026-06-05T10:00:00.000Z"}, {"price": 8130, "old_price": null, "scraped_at": "2026-06-04T10:00:00.000Z"}, {"price": 8139, "old_price": null, "scraped_at": "2026-06-03T10:00:00.000Z"}, {"price": 8240, "old_price": 9270, "scraped_at": "2026-06-02T10:00:00.000Z"}, {"price": 8102, "old_price": null, "scraped_at": "2026-06-01T10:00:00.000Z"}], "latest_price": 8161, "previous_price": 7972}, "11": {"product": {"id": 11, "name": "Apple Watch Series 9 GPS", "platform": "mercadolibre", "competitor_urls": "[]", "basePrice": 9999}, "history": [{"price": 10318, "old_price": 11189, "scraped_at": "2026-04-15T10:00:00.000Z"}, {"price": 10042, "old_price": 11479, "scraped_at": "2026-05-14T10:00:00.000Z"}, {"price": 9756, "old_price": 9958, "scraped_at": "2026-05-13T10:00:00.000Z"}, {"price": 9727, "old_price": 11109, "scraped_at": "2026-05-12T10:00:00.000Z"}, {"price": 9655, "old_price": null, "scraped_at": "2026-05-11T10:00:00.000Z"}, {"price": 9743, "old_price": null, "scraped_at": "2026-05-10T10:00:00.000Z"}, {"price": 9949, "old_price": null, "scraped_at": "2026-05-09T10:00:00.000Z"}, {"price": 10101, "old_price": null, "scraped_at": "2026-05-08T10:00:00.000Z"}, {"price": 9941, "old_price": null, "scraped_at": "2026-06-07T10:00:00.000Z"}, {"price": 10259, "old_price": 11715, "scraped_at": "2026-06-06T10:00:00.000Z"}, {"price": 9938, "old_price": 10316, "scraped_at": "2026-06-05T10:00:00.000Z"}, {"price": 10243, "old_price": null, "scraped_at": "2026-06-04T10:00:00.000Z"}, {"price": 10412, "old_price": null, "scraped_at": "2026-06-03T10:00:00.000Z"}, {"price": 10126, "old_price": null, "scraped_at": "2026-06-02T10:00:00.000Z"}, {"price": 10112, "old_price": 11441, "scraped_at": "2026-06-01T10:00:00.000Z"}], "latest_price": 10318, "previous_price": 10042}, "12": {"product": {"id": 12, "name": "Xiaomi Redmi Note 14 Pro", "platform": "mercadolibre", "competitor_urls": "[\"comp1\"]", "basePrice": 5999}, "history": [{"price": 5918, "old_price": null, "scraped_at": "2026-04-15T10:00:00.000Z"}, {"price": 6058, "old_price": null, "scraped_at": "2026-05-14T10:00:00.000Z"}, {"price": 6055, "old_price": null, "scraped_at": "2026-05-13T10:00:00.000Z"}, {"price": 6005, "old_price": null, "scraped_at": "2026-05-12T10:00:00.000Z"}, {"price": 5710, "old_price": 6103, "scraped_at": "2026-05-11T10:00:00.000Z"}, {"price": 5783, "old_price": null, "scraped_at": "2026-05-10T10:00:00.000Z"}, {"price": 5900, "old_price": null, "scraped_at": "2026-05-09T10:00:00.000Z"}, {"price": 6035, "old_price": 6815, "scraped_at": "2026-05-08T10:00:00.000Z"}, {"price": 5859, "old_price": null, "scraped_at": "2026-06-07T10:00:00.000Z"}, {"price": 6002, "old_price": null, "scraped_at": "2026-06-06T10:00:00.000Z"}, {"price": 6262, "old_price": 6515, "scraped_at": "2026-06-05T10:00:00.000Z"}, {"price": 6295, "old_price": null, "scraped_at": "2026-06-04T10:00:00.000Z"}, {"price": 5982, "old_price": null, "scraped_at": "2026-06-03T10:00:00.000Z"}, {"price": 5973, "old_price": null, "scraped_at": "2026-06-02T10:00:00.000Z"}, {"price": 6087, "old_price": 6345, "scraped_at": "2026-06-01T10:00:00.000Z"}], "latest_price": 5918, "previous_price": 6058}}};

var DEMO_ALERTS = [{"id": 1, "product_id": 1, "type": "price_drop", "message": "\ud83d\udd3b Samsung Galaxy S25 Ultra baj\u00f3 5.2%\\n$26,299 \u2192 $24,999", "read": 0, "created_at": "2026-06-02T10:00:00.000Z", "product_name": "Samsung Galaxy S25 Ultra"}, {"id": 2, "product_id": 2, "type": "price_change", "message": "\ud83d\udd3a iPhone 16 Pro Max subi\u00f3 3.1%\\n$28,119 \u2192 $28,999", "read": 0, "created_at": "2026-06-02T07:00:00.000Z", "product_name": "iPhone 16 Pro Max"}, {"id": 3, "product_id": 3, "type": "stock_change", "message": "\ud83d\udce6 Nintendo Switch OLED vuelve a estar disponible", "read": 1, "created_at": "2026-06-01T22:00:00.000Z", "product_name": "Nintendo Switch OLED"}, {"id": 4, "product_id": 4, "type": "price_drop", "message": "\ud83d\udd3b MacBook Air M4 baj\u00f3 8.0%\\n$30,399 \u2192 $27,999", "read": 0, "created_at": "2026-06-02T00:00:00.000Z", "product_name": "MacBook Air M4"}, {"id": 5, "product_id": 6, "type": "price_change", "message": "\ud83d\udcc8 Monitor LG: tu precio 8% arriba del promedio. Considera ajustar.", "read": 0, "created_at": "2026-06-02T04:00:00.000Z", "product_name": "Monitor LG UltraGear"}, {"id": 6, "product_id": 5, "type": "promotion", "message": "\ud83c\udf89 AirPods Pro 2 en Hot Sale! -15%", "read": 0, "created_at": "2026-06-02T08:00:00.000Z", "product_name": "AirPods Pro 2"}, {"id": 7, "product_id": 8, "type": "price_drop", "message": "\ud83d\udd3b PS5 Slim Digital baj\u00f3 4.8%\\n$8,919 \u2192 $8,499", "read": 1, "created_at": "2026-05-31T10:00:00.000Z", "product_name": "PlayStation 5 Slim"}];

var DEMO_WEEKLY = [{"day": "2026-05-27", "avg_price": 18900}, {"day": "2026-05-28", "avg_price": 19100}, {"day": "2026-05-29", "avg_price": 18700}, {"day": "2026-05-30", "avg_price": 18400}, {"day": "2026-05-31", "avg_price": 18500}, {"day": "2026-06-01", "avg_price": 18200}, {"day": "2026-06-02", "avg_price": 17900}];

var authToken = localStorage.getItem('alertaprecio_token') || 'demo_token';
var currentUser = JSON.parse(localStorage.getItem('alertaprecio_user') || '{"name":"Marco Tienda Oficial","email":"demo@alertaprecio.mx","plan":"pro"}');
var USER_PLAN = currentUser.plan || 'pro';
var demoKey = USER_PLAN;

// ===== API Mock =====
function apiMock(path, options) {
    if (path === '/products') return Promise.resolve(Object.values(DEMO_DATA[demoKey] || DEMO_DATA.pro).map(d => d.product));
    if (path === '/alerts') return Promise.resolve(DEMO_ALERTS);
    if (path === '/report/summary') return Promise.resolve({productsMonitored: Object.keys(DEMO_DATA[demoKey] || DEMO_DATA.pro).length, alertsToday: 3, plan: USER_PLAN, planLimit: USER_PLAN === 'pro' ? 25 : 5});
    if (path === '/report/weekly') return Promise.resolve(DEMO_WEEKLY);
    
    var m = path.match(/^\/products\/(\d+)\/history/);
    if (m) {
        var pid = m[1];
        return Promise.resolve((DEMO_DATA[demoKey] && DEMO_DATA[demoKey][pid]) ? DEMO_DATA[demoKey][pid].history : []);
    }
    
    m = path.match(/^\/analysis\/(\d+)\/competitors/);
    if (m) {
        return Promise.resolve({recommendation: "Tu precio esta en rango competitivo. El promedio de tus competidores esta $287 abajo — considera un ajuste del 2-3% para ganar el Buy Box.", avgCompetitor: 17800, myPrice: 18200});
    }
    
    return Promise.resolve(null);
}

// Override API function
async function api(path, options) {
    // Try real API first, fallback to mock
    try {
        var res = await fetch('/api' + path, {
            headers: {'Content-Type':'application/json','Authorization':'Bearer '+authToken},
            ...options
        });
        if (res.ok) return res.json();
    } catch(e) {}
    return apiMock(path, options);
}

function checkAuth() { return true; }

// Rest of app.js (the non-API parts)
document.addEventListener('DOMContentLoaded', () => {
  if (!checkAuth()) return;

  // Update user display
  if (currentUser) {
    const nameEl = document.getElementById('user-name');
    if (nameEl) nameEl.textContent = currentUser.name || currentUser.email;
    updatePlanBadge(currentUser.plan);
  }

  // Logout
  document.getElementById('logout-btn')?.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'login.html';
  });

  // Dashboard overview
  if (document.getElementById('products-count')) {
    loadOverview();
  }

  // Products page
  if (document.getElementById('products-table')) {
    loadProducts();
    setupProductModal();
  }

  // Alerts page
  if (document.getElementById('alerts-list')) {
    loadAlerts();
    setupAlertsActions();
  }

  // Config page
  if (document.getElementById('account-info')) {
    loadConfig();
  }

  // Chart
  const chartCanvas = document.getElementById('trendChart');
  if (chartCanvas) {
    initTrendChart(chartCanvas);
    loadTrendData();
  }

  // Onboarding
  checkOnboarding();
});

// ========== ONBOARDING ==========
function checkOnboarding() {
  const completed = localStorage.getItem('onboarding_completed');
  const banner = document.getElementById('onboarding-banner');
  if (!banner) return;

  if (!completed) {
    banner.classList.remove('hidden');
    document.getElementById('start-onboarding')?.addEventListener('click', () => {
      banner.classList.add('hidden');
      window.location.href = 'productos.html#add';
    });
  }
}

// ========== OVERVIEW ==========
async function loadOverview() {
  const [summary, alerts] = await Promise.all([
    api('/report/summary'),
    api('/alerts?limit=5'),
  ]);

  if (summary) {
    document.getElementById('products-count').textContent = summary.productsMonitored;
    document.getElementById('alerts-today').textContent = summary.alertsToday;
    updatePlanBadge(summary.plan);

    // Mark onboarding as done if user has products
    if (summary.productsMonitored > 0) {
      localStorage.setItem('onboarding_completed', '1');
      document.getElementById('onboarding-banner')?.classList.add('hidden');
    }
  }

  // Recent alerts
  const container = document.getElementById('recent-alerts');
  if (alerts && alerts.length > 0) {
    container.innerHTML = alerts.slice(0, 4).map(a => {
      const typeEmoji = { price_drop: '🔻', price_change: '📈', stock_change: '📦', promotion: '🎉' }[a.type] || '🔔';
      return `
        <div class="card alert-mini" style="margin-bottom:0.5rem; padding:1rem">
          <div style="display:flex; gap:0.75rem; align-items:start">
            <span style="font-size:1.2rem">${typeEmoji}</span>
            <div style="flex:1">
              <div style="font-size:0.85rem; line-height:1.4">${escHtml(a.message)}</div>
              <div class="text-muted" style="margin-top:0.25rem">${formatRelative(a.created_at)}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  } else {
    container.innerHTML = '<div class="card" style="text-align:center;color:var(--text-muted);padding:2rem">No hay alertas aun. Las alertas apareceran cuando se detecten cambios de precio.</div>';
  }

  // Avg change calculation
  const products = await api('/products');
  if (products && products.length > 0) {
    let totalChange = 0, changes = 0;
    for (const p of products.slice(0, 6)) {
      const history = await api(`/products/${p.id}/history?limit=2`);
      if (history && history.length >= 2) {
        const diff = ((history[0].price - history[1].price) / history[1].price) * 100;
        totalChange += diff;
        changes++;
      }
    }
    document.getElementById('avg-change').textContent = changes > 0
      ? (totalChange / changes).toFixed(1) + '%'
      : 'N/A';
  }
}

// ========== PRODUCTS ==========
async function loadProducts() {
  const products = await api('/products');
  const tbody = document.querySelector('#products-table tbody');
  if (!tbody) return;

  if (!products || products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="empty-state">
      <p style="font-size:1.2rem;margin-bottom:0.5rem">📦 No hay productos</p>
      <p>Agrega tu primer producto para empezar a monitorear precios.</p>
      <button class="btn btn-primary" style="margin-top:1rem" id="empty-add-btn">+ Agregar Producto</button>
    </td></tr>`;
    document.getElementById('empty-add-btn')?.addEventListener('click', () => {
      document.getElementById('add-product-modal')?.classList.remove('hidden');
    });
    return;
  }

  const rows = [];
  for (const p of products) {
    const history = await api(`/products/${p.id}/history?limit=1`);
    const latest = history?.[0];
    const competitors = JSON.parse(p.competitor_urls || '[]').length;
    const yesterday = await api(`/products/${p.id}/history?limit=2`);
    let trend = '';
    if (yesterday && yesterday.length >= 2) {
      const pct = ((yesterday[0].price - yesterday[1].price) / yesterday[1].price) * 100;
      if (Math.abs(pct) >= 1) {
        trend = pct < 0
          ? `<span style="color:var(--success)">🔻 ${Math.abs(pct).toFixed(1)}%</span>`
          : `<span style="color:var(--danger)">🔺 ${pct.toFixed(1)}%</span>`;
      }
    }

    rows.push(`
      <tr>
        <td>
          <div class="product-name-cell">${escHtml(p.name)}</div>
          <span class="text-muted">${platformLabel(p.platform)}</span>
        </td>
        <td class="price-cell">${latest?.price ? formatCurrency(latest.price) : '--'}</td>
        <td>${competitors}</td>
        <td>${trend || '➡️ 0%'}</td>
        <td class="text-muted">${latest?.scraped_at ? formatRelative(latest.scraped_at) : 'Nunca'}</td>
        <td>
          <button class="btn btn-sm" onclick="viewProductDetail(${p.id})">Detalle</button>
          <button class="btn btn-sm btn-danger" onclick="deleteProduct(${p.id})">✕</button>
        </td>
      </tr>
    `);
  }

  tbody.innerHTML = rows.join('');

  // Auto-open add modal if URL has #add
  if (window.location.hash === '#add') {
    document.getElementById('add-product-modal')?.classList.remove('hidden');
    window.location.hash = '';
  }
}

function setupProductModal() {
  const modal = document.getElementById('add-product-modal');
  const openBtn = document.getElementById('add-product-btn');
  const closeBtn = document.getElementById('close-modal');
  const cancelBtn = document.getElementById('cancel-modal');
  const form = document.getElementById('add-product-form');

  openBtn?.addEventListener('click', () => modal?.classList.remove('hidden'));
  closeBtn?.addEventListener('click', () => modal?.classList.add('hidden'));
  cancelBtn?.addEventListener('click', () => modal?.classList.add('hidden'));

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('product-name')?.value.trim();
    const url = document.getElementById('product-url')?.value.trim();
    const platform = document.getElementById('product-platform')?.value;
    const competitorsText = document.getElementById('product-competitors')?.value.trim();
    const competitor_urls = competitorsText ? competitorsText.split('\n').map(s => s.trim()).filter(Boolean) : [];

    if (!name || !url || !platform) return alert('Completa todos los campos.');

    const result = await api('/products', {
      method: 'POST',
      body: JSON.stringify({ name, url, platform, competitor_urls }),
    });

    if (result?.id) {
      modal?.classList.add('hidden');
      form.reset();
      loadProducts();
      localStorage.setItem('onboarding_completed', '1');

      // Post working status
      await fetch('https://webhook.site/46af9d1d-79ba-4126-8364-2ffca63654f6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'milestone_status', block: '2.1', status: 'dashboard_live', from: 'User', summary: 'Producto agregado desde dashboard' }),
      });
    } else {
      alert('Error al agregar producto.');
    }
  });
}

async function viewProductDetail(id) {
  const modal = document.getElementById('detail-modal');
  if (!modal) return;

  modal.classList.remove('hidden');
  const content = document.getElementById('detail-content');
  const title = document.getElementById('detail-title');
  content.innerHTML = '<div class="loading">Cargando...</div>';

  const [product, history, analysis] = await Promise.all([
    api(`/products/${id}`),
    api(`/products/${id}/history?limit=30`),
    api(`/analysis/${id}/competitors`),
  ]);

  if (!product) {
    content.innerHTML = '<div class="empty-state">Producto no encontrado</div>';
    return;
  }

  title.textContent = product.name;
  const latest = history?.[0];
  const previous = history?.[1];
  const change = previous && latest
    ? ((latest.price - previous.price) / previous.price * 100).toFixed(1)
    : null;

  content.innerHTML = `
    <div class="detail-grid">
      <div class="detail-card">
        <div class="card-label">Precio Actual</div>
        <div class="card-value" style="font-size:1.4rem">${latest ? formatCurrency(latest.price) : 'N/A'}</div>
        ${change ? `<div class="${parseFloat(change) < 0 ? 'text-success' : 'text-danger'}" style="font-size:0.85rem">${parseFloat(change) < 0 ? '🔻' : '🔺'} ${Math.abs(change)}% vs ayer</div>` : ''}
      </div>
      <div class="detail-card">
        <div class="card-label">Plataforma</div>
        <div class="card-value" style="font-size:1.1rem">${platformLabel(product.platform)}</div>
      </div>
      <div class="detail-card">
        <div class="card-label">Muestras (7d)</div>
        <div class="card-value">${history?.length || 0}</div>
      </div>
      <div class="detail-card">
        <div class="card-label">Competidores</div>
        <div class="card-value">${JSON.parse(product.competitor_urls || '[]').length}</div>
      </div>
    </div>
    ${analysis?.recommendation ? `
      <div class="detail-card" style="margin-top:1rem; border-left:3px solid var(--primary)">
        <div class="card-label">🤖 Analisis IA</div>
        <p style="margin-top:0.5rem; line-height:1.6">${analysis.recommendation}</p>
        ${analysis.avgCompetitor ? `<p class="text-muted" style="margin-top:0.5rem">Promedio competidores: ${formatCurrency(analysis.avgCompetitor)}</p>` : ''}
      </div>
    ` : ''}
    <div class="chart-container" style="margin-top:1rem; height:200px">
      <canvas id="detail-chart"></canvas>
    </div>
  `;

  // Mini chart
  if (history && history.length > 1) {
    const ctx = document.getElementById('detail-chart');
    if (ctx) {
      const reversed = [...history].reverse();
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: reversed.map(h => new Date(h.scraped_at).toLocaleDateString('es-MX', { day: 'numeric', month: 'short' })),
          datasets: [{
            label: 'Precio', data: reversed.map(h => h.price),
            borderColor: '#2563eb', backgroundColor: 'rgba(37,99,235,0.1)',
            tension: 0.3, fill: true, pointRadius: 2,
          }],
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
            x: { ticks: { color: '#94a3b8', maxTicksLimit: 7 }, grid: { color: '#334155' } },
          },
        },
      });
    }
  }

  document.getElementById('close-detail')?.addEventListener('click', () => modal.classList.add('hidden'));
}

async function deleteProduct(id) {
  if (!confirm('Desactivar este producto del monitoreo?')) return;
  await api(`/products/${id}`, { method: 'DELETE' });
  loadProducts();
}

// Search
document.addEventListener('input', e => {
  if (e.target.id !== 'product-search') return;
  const term = e.target.value.toLowerCase();
  document.querySelectorAll('#products-table tbody tr').forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(term) ? '' : 'none';
  });
});

// ========== ALERTS ==========
async function loadAlerts() {
  const alerts = await api('/alerts?limit=50');
  const container = document.getElementById('alerts-list');
  if (!container) return;

  if (!alerts || alerts.length === 0) {
    container.innerHTML = '<div class="empty-state">🔔 No hay alertas aun. Las alertas apareceran cuando se detecten cambios de precio.</div>';
    return;
  }

  const typeBadge = {
    price_drop: '<span class="badge badge-price_drop">Baja de Precio</span>',
    price_change: '<span class="badge badge-price_change">Cambio</span>',
    stock_change: '<span class="badge badge-stock_change">Stock</span>',
    promotion: '<span class="badge badge-promotion">Promocion</span>',
  };

  container.innerHTML = alerts.map(a => `
    <div class="card alert-card ${a.read ? 'alert-read' : 'alert-unread'}" style="margin-bottom:0.75rem" data-id="${a.id}">
      <div style="display:flex; justify-content:space-between; align-items:start">
        <div>
          ${typeBadge[a.type] || a.type}
          ${a.product_name ? `<strong style="margin-left:0.5rem">${escHtml(a.product_name)}</strong>` : ''}
        </div>
        <span class="text-muted">${formatRelative(a.created_at)}</span>
      </div>
      <div style="margin-top:0.5rem; white-space:pre-line; font-size:0.9rem; line-height:1.5">${escHtml(a.message)}</div>
      ${!a.read ? '<button class="btn btn-sm mark-read-btn" style="margin-top:0.5rem">Marcar leida</button>' : ''}
    </div>
  `).join('');

  container.querySelectorAll('.mark-read-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const card = btn.closest('.alert-card');
      await api(`/alerts/${card.dataset.id}/read`, { method: 'PATCH' });
      card.classList.remove('alert-unread');
      card.classList.add('alert-read');
      btn.remove();
    });
  });
}

function setupAlertsActions() {
  document.getElementById('mark-all-read')?.addEventListener('click', async () => {
    document.querySelectorAll('.alert-unread').forEach(async card => {
      await api(`/alerts/${card.dataset.id}/read`, { method: 'PATCH' });
    });
    loadAlerts();
  });
}

// ========== CONFIG ==========
async function loadConfig() {
  const container = document.getElementById('account-info');
  if (!container) return;

  if (currentUser) {
    container.innerHTML = `
      <p><strong>${escHtml(currentUser.name || 'Usuario')}</strong></p>
      <p class="text-muted">${escHtml(currentUser.email)}</p>
      <p><span class="badge badge-blue" style="font-size:0.8rem">Plan ${currentUser.plan || 'starter'}</span></p>
    `;
    updatePlanBadge(currentUser.plan);
  }
}

// ========== CHART ==========
let trendChart = null;
function initTrendChart(ctx) {
  if (trendChart) trendChart.destroy();
  trendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Precio Promedio', data: [],
        borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)',
        tension: 0.3, fill: true, pointRadius: 3,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { ticks: { color: '#94a3b8', callback: v => '$' + v.toLocaleString('es-MX') }, grid: { color: '#334155' } },
        x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
      },
    },
  });
}

async function loadTrendData() {
  const report = await api('/report/weekly');
  if (!report || !report.length) return;

  // Group by day
  const dayMap = {};
  report.forEach(r => {
    if (!r.day) return;
    if (!dayMap[r.day]) dayMap[r.day] = { sum: 0, count: 0 };
    dayMap[r.day].sum += r.avg_price;
    dayMap[r.day].count++;
  });

  const data = Object.entries(dayMap)
    .map(([day, v]) => ({ day, price: v.sum / v.count }))
    .sort((a, b) => a.day.localeCompare(b.day));

  if (trendChart && data.length) {
    trendChart.data.labels = data.map(d => {
      const date = new Date(d.day + 'T12:00:00');
      return date.toLocaleDateString('es-MX', { weekday: 'short', day: 'numeric' });
    });
    trendChart.data.datasets[0].data = data.map(d => d.price);
    trendChart.update();
  }
}

// ========== UTILS ==========
function formatCurrency(amount) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(amount || 0);
}

function formatRelative(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const mins = Math.floor((now - d) / 60000);
  if (mins < 1) return 'Ahora';
  if (mins < 60) return `Hace ${mins}m`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `Hace ${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `Hace ${days}d`;
  return d.toLocaleDateString('es-MX');
}

function platformLabel(p) {
  return { mercadolibre: 'Mercado Libre', amazon: 'Amazon MX', shopify: 'Shopify', other: 'Otra' }[p] || p;
}

function escHtml(s) {
  const d = document.createElement('div');
  d.textContent = s || '';
  return d.innerHTML;
}

function updatePlanBadge(plan) {
  const badge = document.getElementById('plan-badge');
  if (badge && plan) {
    badge.textContent = 'Plan: ' + plan.charAt(0).toUpperCase() + plan.slice(1);
  }
}
