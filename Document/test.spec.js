import { test, expect } from '@playwright/test';

  // --------------------------------------------------------------------valid--------------------------------------------------------------------


test('TC01', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
});


test('TC02', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  const checkFlag = await expect(page.locator('#countries')).toBeVisible()
  const checkFlagUK = await expect(page.getByRole('link', { name: 'gb' })).toBeVisible()
  const checkFlagTH = await expect(page.getByRole('link', { name: 'th', exact: true })).toBeVisible()
  const checkFlagID = await expect(page.getByRole('link', { name: 'id' })).toBeVisible()
});


test('TC03', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const checkTH1 = await expect(page.getByText('  เสื้อผ้า')).toBeVisible()
    const checkTH2 = await expect(page.getByText('  อุปกรณ์เสริม',{exact: true})).toBeVisible()
    await page.getByRole('link', { name: 'gb' }).click(); //Change Language
    const CheckEN1 = await expect(page.getByText('  Clothes')).toBeVisible()
    const CheckEN2 = await expect(page.getByText('  Accessories',{exact: true})).toBeVisible()
  });


  test('TC04', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const checkTH1 = await expect(page.getByText('  เสื้อผ้า')).toBeVisible()
    const checkTH2 = await expect(page.getByText('  อุปกรณ์เสริม',{exact: true})).toBeVisible()
    await page.getByRole('link', { name: 'th', exact: true }).click(); //Change Language
    const CheckTH3 = await expect(page.getByText('  เสื้อผ้า')).toBeVisible()
    const CheckTH4 = await expect(page.getByText('  อุปกรณ์เสริม',{exact: true})).toBeVisible()
  });

  
  test('TC05', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const checkTH1 = await expect(page.getByText('  เสื้อผ้า')).toBeVisible()
    const checkTH2 = await expect(page.getByText('  อุปกรณ์เสริม',{exact: true})).toBeVisible()
    await page.getByRole('link', { name: 'id' }).click(); //Change Language
    const CheckID1 = await expect(page.getByText('  Pakaian')).toBeVisible()
    const CheckID2 = await expect(page.getByText('  Aksesoris', { exact: true })).toBeVisible()
  });


  test('TC06', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'gb' }).click(); //Change Language
    const checkEN1 = await expect(page.getByText('  Clothes')).toBeVisible()
    const checkEN2 = await expect(page.getByText('  Accessories',{exact: true})).toBeVisible()
    await page.getByRole('link', { name: 'id' }).click(); //Change Language
    const CheckID1 = await expect(page.getByText('  Pakaian')).toBeVisible()
    const CheckID2 = await expect(page.getByText('  Aksesoris', { exact: true })).toBeVisible()
  });


  test('TC07', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const checkTH1 = await expect(page.getByText('รถเข็น')).toBeVisible()
    await page.getByRole('link', { name: 'gb' }).click(); //Change Language
    const CheckEN1 = await expect(page.getByText('Cart', { exact: true })).toBeVisible()
  });


  test('TC08', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const checkTH1 = await expect(page.getByText('รถเข็น')).toBeVisible()
    await page.getByRole('link', { name: 'th', exact: true }).click(); //Change Language
    const checkTH2 = await expect(page.getByText('รถเข็น')).toBeVisible()
  });


  test('TC09', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const checkTH1 = await expect(page.getByText('รถเข็น')).toBeVisible()
    await page.getByRole('link', { name: 'id' }).click(); //Change Language
    const checkID1 = await expect(page.getByText('Troli')).toBeVisible()
  });


  test('TC10', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'gb' }).click(); //Change Language
    const CheckEN1 = await expect(page.getByText('Cart', { exact: true })).toBeVisible()
    await page.getByRole('link', { name: 'id' }).click(); //Change Language
    const checkID1 = await expect(page.getByText('Troli')).toBeVisible()
  });


  test('TC11', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const CheckTH1 = await expect(page.getByRole('heading', { name: 'สินค้ายอดนิยม' })).toBeVisible()
    await page.getByRole('link', { name: 'gb' }).click(); //Change Language
    const CheckEN2 = await expect(page.getByRole('heading', { name: 'Popular Products' })).toBeVisible()
  });


  test('TC12', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const CheckTH1 = await expect(page.getByRole('heading', { name: 'สินค้ายอดนิยม' })).toBeVisible()
    await page.getByRole('link', { name: 'th', exact: true }).click(); //Change Language
    const CheckTH2 = await expect(page.getByRole('heading', { name: 'สินค้ายอดนิยม' })).toBeVisible()
  });


  test('TC13', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const CheckTH1 = await expect(page.getByRole('heading', { name: 'สินค้ายอดนิยม' })).toBeVisible()
    await page.getByRole('link', { name: 'id' }).click();//Change Language
    const CheckID1 = await expect(page.getByRole('heading', { name: 'Populer' })).toBeVisible()
  });


  test('TC14', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const CheckTH1 = await expect(page.getByRole('heading', { name: 'แก้วน้ำ' }).first()).toBeVisible()
    const CheckTH2 = await expect(page.getByRole('heading', { name: 'ขวดเก็บความเย็น' }).first()).toBeVisible()
    const CheckTH3 = await expect(page.getByRole('heading', { name: 'กระเป๋าผ้า' }).first()).toBeVisible()
    const CheckTH4 = await expect(page.getByRole('heading', { name: 'เสื้อเชิ้ตสำหรับผู้ชาย' }).first()).toBeVisible()
    const CheckTH5 = await expect(page.getByRole('heading', { name: 'เคสโทรศัพท์' }).first()).toBeVisible()
    const CheckTH6 = await expect(page.getByRole('heading', { name: 'เสื้อเชิ้ตสำหรับผู้หญิง' }).first()).toBeVisible()
    const CheckTH7 = await expect(page.getByRole('heading', { name: 'สมุด' }).first()).toBeVisible()
    const CheckTH8 = await expect(page.getByRole('heading', { name: 'แฟลชไดร์ฟ' }).first()).toBeVisible()

    await page.getByRole('link', { name: 'gb' }).click(); //Change Language

    const CheckEN1 = await expect(page.getByRole('heading', { name: 'Glass' }).first()).toBeVisible()
    const CheckEN2 = await expect(page.getByRole('heading', { name: 'Cold Storage Bottle' }).first()).toBeVisible()
    const CheckEN3 = await expect(page.getByRole('heading', { name: 'Cloth Bag' }).first()).toBeVisible()
    const CheckEN4 = await expect(page.getByRole('heading', { name: 'T-Shirts For Men' }).first()).toBeVisible()
    const CheckEN5 = await expect(page.getByRole('heading', { name: 'Phone Case' }).first()).toBeVisible()
    const CheckEN6 = await expect(page.getByRole('heading', { name: 'T-Shirts For Women' }).first()).toBeVisible()
    const CheckEN7 = await expect(page.getByRole('heading', { name: 'Notebook' }).first()).toBeVisible()
    const CheckEN8 = await expect(page.getByRole('heading', { name: 'Flashdrive' }).first()).toBeVisible()

  });

  test('TC15', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const CheckTH1 = await expect(page.getByRole('heading', { name: 'แก้วน้ำ' }).first()).toBeVisible()
    const CheckTH2 = await expect(page.getByRole('heading', { name: 'ขวดเก็บความเย็น' }).first()).toBeVisible()
    const CheckTH3 = await expect(page.getByRole('heading', { name: 'กระเป๋าผ้า' }).first()).toBeVisible()
    const CheckTH4 = await expect(page.getByRole('heading', { name: 'เสื้อเชิ้ตสำหรับผู้ชาย' }).first()).toBeVisible()
    const CheckTH5 = await expect(page.getByRole('heading', { name: 'เคสโทรศัพท์' }).first()).toBeVisible()
    const CheckTH6 = await expect(page.getByRole('heading', { name: 'เสื้อเชิ้ตสำหรับผู้หญิง' }).first()).toBeVisible()
    const CheckTH7 = await expect(page.getByRole('heading', { name: 'สมุด' }).first()).toBeVisible()
    const CheckTH8 = await expect(page.getByRole('heading', { name: 'แฟลชไดร์ฟ' }).first()).toBeVisible()

    await page.getByRole('link', { name: 'th', exact: true }).click(); //Change Language

    const CheckTH9 = await expect(page.getByRole('heading', { name: 'แก้วน้ำ' }).first()).toBeVisible()
    const CheckTH10 = await expect(page.getByRole('heading', { name: 'ขวดเก็บความเย็น' }).first()).toBeVisible()
    const CheckTH11 = await expect(page.getByRole('heading', { name: 'กระเป๋าผ้า' }).first()).toBeVisible()
    const CheckTH12 = await expect(page.getByRole('heading', { name: 'เสื้อเชิ้ตสำหรับผู้ชาย' }).first()).toBeVisible()
    const CheckTH13 = await expect(page.getByRole('heading', { name: 'เคสโทรศัพท์' }).first()).toBeVisible()
    const CheckTH14 = await expect(page.getByRole('heading', { name: 'เสื้อเชิ้ตสำหรับผู้หญิง' }).first()).toBeVisible()
    const CheckTH15 = await expect(page.getByRole('heading', { name: 'สมุด' }).first()).toBeVisible()
    const CheckTH16 = await expect(page.getByRole('heading', { name: 'แฟลชไดร์ฟ' }).first()).toBeVisible()
  });


  test('TC16', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const CheckTH1 = await expect(page.getByRole('heading', { name: 'แก้วน้ำ' }).first()).toBeVisible()
    const CheckTH2 = await expect(page.getByRole('heading', { name: 'ขวดเก็บความเย็น' }).first()).toBeVisible()
    const CheckTH3 = await expect(page.getByRole('heading', { name: 'กระเป๋าผ้า' }).first()).toBeVisible()
    const CheckTH4 = await expect(page.getByRole('heading', { name: 'เสื้อเชิ้ตสำหรับผู้ชาย' }).first()).toBeVisible()
    const CheckTH5 = await expect(page.getByRole('heading', { name: 'เคสโทรศัพท์' }).first()).toBeVisible()
    const CheckTH6 = await expect(page.getByRole('heading', { name: 'เสื้อเชิ้ตสำหรับผู้หญิง' }).first()).toBeVisible()
    const CheckTH7 = await expect(page.getByRole('heading', { name: 'สมุด' }).first()).toBeVisible()
    const CheckTH8 = await expect(page.getByRole('heading', { name: 'แฟลชไดร์ฟ' }).first()).toBeVisible()

    await page.getByRole('link', { name: 'id' }).click(); //Change Language

    const CheckID1 = await expect(page.getByRole('heading', { name: 'Kaca' }).first()).toBeVisible()
    const CheckID2 = await expect(page.getByRole('heading', { name: 'Botol Penyimpanan Dingin' }).first()).toBeVisible()
    const CheckID3 = await expect(page.getByRole('heading', { name: 'Tas Kain' }).first()).toBeVisible()
    const CheckID4 = await expect(page.getByRole('heading', { name: 'Kaos Untuk Pria' }).first()).toBeVisible()
    const CheckID5 = await expect(page.getByRole('heading', { name: 'Pelindung Handphone' }).first()).toBeVisible()
    const CheckID6 = await expect(page.getByRole('heading', { name: 'Kaos Untuk Wanita' }).first()).toBeVisible()
    const CheckID7 = await expect(page.getByRole('heading', { name: 'Buku Catatan' }).first()).toBeVisible()
    const CheckID8 = await expect(page.getByRole('heading', { name: 'Flashdisk' }).first()).toBeVisible()
  });



  test('TC17', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const CheckTH1 = await expect(page.getByRole('heading', { name: 'แก้วน้ำ' }).first()).toBeVisible()
    await page.getByRole('link', { name: 'แก้วน้ำ' }).first().hover();
    const checkTH1 = await expect(page.locator('.quick-view', { name: 'เปิดหน้าต่างต่อ' }).first()).toBeVisible()
    await page.getByRole('link', { name: 'gb' }).click(); //Change Language
    const CheckEN1 = await expect(page.getByRole('heading', { name: 'Glass' }).first()).toBeVisible()
    await page.getByRole('link', { name: 'Glass' }).first().hover();
    const checkEN1 = await expect(page.locator('.quick-view', { name: 'Quick view' }).first()).toBeVisible()
  });


  test('TC18', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const CheckTH1 = await expect(page.getByRole('heading', { name: 'แก้วน้ำ' }).first()).toBeVisible()
    await page.getByRole('link', { name: 'แก้วน้ำ' }).first().hover();
    const checkTH1 = await expect(page.locator('.quick-view', { name: 'เปิดหน้าต่างต่อ' }).first()).toBeVisible()
    await page.getByRole('link', { name: 'th', exact: true }).click(); //Change Language
    const CheckTH2 = await expect(page.getByRole('heading', { name: 'แก้วน้ำ' }).first()).toBeVisible()
    await page.getByRole('link', { name: 'แก้วน้ำ' }).first().hover();
    const checkTH2 = await expect(page.locator('.quick-view', { name: 'เปิดหน้าต่างต่อ' }).first()).toBeVisible()
  });


  test('TC19', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const CheckTH1 = await expect(page.getByRole('heading', { name: 'แก้วน้ำ' }).first()).toBeVisible()
    await page.getByRole('link', { name: 'แก้วน้ำ' }).first().hover();
    const checkTH1 = await expect(page.locator('.quick-view', { name: 'เปิดหน้าต่างต่อ' }).first()).toBeVisible()
    await page.getByRole('link', { name: 'id' }).click(); //Change Language
    const CheckID2 = await expect(page.getByRole('heading', { name: 'Kaca' }).first()).toBeVisible()
    await page.getByRole('link', { name: 'Kaca' }).first().hover();
    const checkID2 = await expect(page.locator('.quick-view', { name: 'Buka jendela mini' }).first()).toBeVisible()
  });


  test('TC20', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const CheckTH1 = await expect(page.locator('p').filter({ hasText: /^สินค้า$/ })).toBeVisible()
    const checkTH2 = await expect(page.getByRole('link', { name: 'ลดราคา' })).toBeVisible()
    const checkTH3 = await expect(page.getByRole('link', { name: 'สินค้าใหม่', exact: true })).toBeVisible()
    const checkTH4 = await expect(page.getByRole('link', { name: 'สินค้าขายดี' })).toBeVisible()

    const CheckTH2 = await expect(page.locator('p').filter({ hasText: /^บริษัทของเรา$/ })).toBeVisible()
    const checkTH5 = await expect(page.getByRole('link', { name: 'ติดต่อเรา' })).toBeVisible()
    const checkTH6 = await expect(page.getByRole('link', { name: 'ร้านค้า' })).toBeVisible()

    const CheckTH3 = await expect(page.locator('p').filter({ hasText: /^หมวดหมู่สินค้า$/ })).toBeVisible()
    const checkTH7 = await expect(page.getByText('อุปกรณ์เสริม', { exact: true })).toBeVisible()
    const checkTH8 = await expect(page.getByText('เสื้อผ้า', { exact: true })).toBeVisible()
    const checkTH9 = await expect(page.getByRole('link', { name: 'ของใช้ภายในบ้าน' })).toBeVisible()

    await page.getByRole('link', { name: 'gb' }).click(); //Change Language

    const CheckEN1 = await expect(page.locator('p').filter({ hasText: /^Products$/ })).toBeVisible()
    const checkEN2 = await expect(page.getByRole('link', { name: 'Prices drop' })).toBeVisible()
    const checkEN3 = await expect(page.getByRole('link', { name: 'New products', exact: true })).toBeVisible()
    const checkEN4 = await expect(page.getByRole('link', { name: 'Best sellers' })).toBeVisible()

    const CheckEN2 = await expect(page.locator('p').filter({ hasText: /^Our company$/ })).toBeVisible()
    const checkEN5 = await expect(page.getByRole('link', { name: 'Contact us' })).toBeVisible()
    const checkEN6 = await expect(page.getByRole('link', { name: 'Stores' })).toBeVisible()

    const CheckEN3 = await expect(page.locator('p').filter({ hasText: /^Categories$/ })).toBeVisible()
    const checkEN7 = await expect(page.getByText('Accessories', { exact: true })).toBeVisible()
    const checkEN8 = await expect(page.getByText('Clothes', { exact: true })).toBeVisible()
    const checkEN9 = await expect(page.getByRole('link', { name: 'Household items' })).toBeVisible()

  });


  test('TC21', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const CheckTH1 = await expect(page.locator('p').filter({ hasText: /^สินค้า$/ })).toBeVisible()
    const checkTH2 = await expect(page.getByRole('link', { name: 'ลดราคา' })).toBeVisible()
    const checkTH3 = await expect(page.getByRole('link', { name: 'สินค้าใหม่', exact: true })).toBeVisible()
    const checkTH4 = await expect(page.getByRole('link', { name: 'สินค้าขายดี' })).toBeVisible()

    const CheckTH2 = await expect(page.locator('p').filter({ hasText: /^บริษัทของเรา$/ })).toBeVisible()
    const checkTH5 = await expect(page.getByRole('link', { name: 'ติดต่อเรา' })).toBeVisible()
    const checkTH6 = await expect(page.getByRole('link', { name: 'ร้านค้า' })).toBeVisible()

    const CheckTH3 = await expect(page.locator('p').filter({ hasText: /^หมวดหมู่สินค้า$/ })).toBeVisible()
    const checkTH7 = await expect(page.getByText('อุปกรณ์เสริม', { exact: true })).toBeVisible()
    const checkTH8 = await expect(page.getByText('เสื้อผ้า', { exact: true })).toBeVisible()
    const checkTH9 = await expect(page.getByRole('link', { name: 'ของใช้ภายในบ้าน' })).toBeVisible()

    await page.getByRole('link', { name: 'th', exact: true }).click();

    const CheckNTH1 = await expect(page.locator('p').filter({ hasText: /^สินค้า$/ })).toBeVisible()
    const checkNTH2 = await expect(page.getByRole('link', { name: 'ลดราคา' })).toBeVisible()
    const checkNTH3 = await expect(page.getByRole('link', { name: 'สินค้าใหม่', exact: true })).toBeVisible()
    const checkNTH4 = await expect(page.getByRole('link', { name: 'สินค้าขายดี' })).toBeVisible()

    const CheckNTH2 = await expect(page.locator('p').filter({ hasText: /^บริษัทของเรา$/ })).toBeVisible()
    const checkNTH5 = await expect(page.getByRole('link', { name: 'ติดต่อเรา' })).toBeVisible()
    const checkNTH6 = await expect(page.getByRole('link', { name: 'ร้านค้า' })).toBeVisible()

    const CheckNTH3 = await expect(page.locator('p').filter({ hasText: /^หมวดหมู่สินค้า$/ })).toBeVisible()
    const checkNTH7 = await expect(page.getByText('อุปกรณ์เสริม', { exact: true })).toBeVisible()
    const checkNTH8 = await expect(page.getByText('เสื้อผ้า', { exact: true })).toBeVisible()
    const checkNTH9 = await expect(page.getByRole('link', { name: 'ของใช้ภายในบ้าน' })).toBeVisible()

  });


  test('TC22', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const CheckTH1 = await expect(page.locator('p').filter({ hasText: /^สินค้า$/ })).toBeVisible()
    const checkTH2 = await expect(page.getByRole('link', { name: 'ลดราคา' })).toBeVisible()
    const checkTH3 = await expect(page.getByRole('link', { name: 'สินค้าใหม่', exact: true })).toBeVisible()
    const checkTH4 = await expect(page.getByRole('link', { name: 'สินค้าขายดี' })).toBeVisible()

    const CheckTH2 = await expect(page.locator('p').filter({ hasText: /^บริษัทของเรา$/ })).toBeVisible()
    const checkTH5 = await expect(page.getByRole('link', { name: 'ติดต่อเรา' })).toBeVisible()
    const checkTH6 = await expect(page.getByRole('link', { name: 'ร้านค้า' })).toBeVisible()

    const CheckTH3 = await expect(page.locator('p').filter({ hasText: /^หมวดหมู่สินค้า$/ })).toBeVisible()
    const checkTH7 = await expect(page.getByText('อุปกรณ์เสริม', { exact: true })).toBeVisible()
    const checkTH8 = await expect(page.getByText('เสื้อผ้า', { exact: true })).toBeVisible()
    const checkTH9 = await expect(page.getByRole('link', { name: 'ของใช้ภายในบ้าน' })).toBeVisible()

    await page.getByRole('link', { name: 'id' }).click(); //Change Language

    const CheckEN1 = await expect(page.locator('p').filter({ hasText: /^Produk$/ })).toBeVisible()
    const checkEN2 = await expect(page.getByRole('link', { name: 'Turun harga' })).toBeVisible()
    const checkEN3 = await expect(page.getByRole('link', { name: 'Produk baru', exact: true })).toBeVisible()
    const checkEN4 = await expect(page.getByRole('link', { name: 'Terlaris' })).toBeVisible()


    const CheckEN2 = await expect(page.locator('p').filter({ hasText: /^Perusahaan kami$/ })).toBeVisible()
    const checkEN5 = await expect(page.getByRole('link', { name: 'Hubungi kami' })).toBeVisible()
    const checkEN6 = await expect(page.getByRole('link', { name: 'Toko' })).toBeVisible()

    const CheckEN3 = await expect(page.locator('p').filter({ hasText: /^Kategori$/ })).toBeVisible()
    const checkEN7 = await expect(page.getByText('Aksesoris', { exact: true })).toBeVisible()
    const checkEN8 = await expect(page.getByText('Pakaian', { exact: true })).toBeVisible()
    const checkEN9 = await expect(page.getByRole('link', { name: 'Peralatan Rumah tangga' })).toBeVisible()

  });


  test('TC23', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'แก้วน้ำ' }).first().click();

    const checkTH1 = await expect(page.getByRole('heading', { name: 'แก้วน้ำ' })).toBeVisible()
    const checkTH2 = await expect(page.getByText('รวมภาษีแล้ว')).toBeVisible()
    const checkTH3 = await expect(page.getByText('จำนวน')).toBeVisible()
    const checkTH4 = await expect(page.getByRole('button', { name: ' หยิบใส่ตะกร้า' })).toBeVisible()

    await page.getByRole('link', { name: 'gb' }).click(); //Change Language

    const checkEN1 = await expect(page.getByRole('heading', { name: 'Glass' })).toBeVisible()
    const checkEN2 = await expect(page.getByText('Tax included')).toBeVisible()
    const checkEN3 = await expect(page.getByText('Quantity')).toBeVisible()
    const checkEN4 = await expect(page.getByRole('button', { name: ' Add to cart' })).toBeVisible()
  });


  test('TC24', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'แก้วน้ำ' }).first().click();

    const checkTH1 = await expect(page.getByRole('heading', { name: 'แก้วน้ำ' })).toBeVisible()
    const checkTH2 = await expect(page.getByText('รวมภาษีแล้ว')).toBeVisible()
    const checkTH3 = await expect(page.getByText('จำนวน')).toBeVisible()
    const checkTH4 = await expect(page.getByRole('button', { name: ' หยิบใส่ตะกร้า' })).toBeVisible()

    await page.getByRole('link', { name: 'th', exact: true }).click(); //Change Language

    const checkTH6 = await expect(page.getByRole('heading', { name: 'แก้วน้ำ' })).toBeVisible()
    const checkTH7 = await expect(page.getByText('รวมภาษีแล้ว')).toBeVisible()
    const checkTH8 = await expect(page.getByText('จำนวน')).toBeVisible()
    const checkTH9 = await expect(page.getByRole('button', { name: ' หยิบใส่ตะกร้า' })).toBeVisible()
  });


  test('TC25', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'แก้วน้ำ' }).first().click();

    const checkTH1 = await expect(page.getByRole('heading', { name: 'แก้วน้ำ' })).toBeVisible()
    const checkTH2 = await expect(page.getByText('รวมภาษีแล้ว')).toBeVisible()
    const checkTH3 = await expect(page.getByText('จำนวน')).toBeVisible()
    const checkTH4 = await expect(page.getByRole('button', { name: ' หยิบใส่ตะกร้า' })).toBeVisible()

    await page.getByRole('link', { name: 'id' }).click(); //Change Language

    const checkID1 = await expect(page.getByRole('heading', { name: 'kaca' })).toBeVisible()
    const checkID2 = await expect(page.getByText('Termasuk pajak')).toBeVisible()
    const checkID3 = await expect(page.getByText('Jumlah')).toBeVisible()
    const checkID4 = await expect(page.getByRole('button', { name: ' Beli' })).toBeVisible()
  });


  test('TC26', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'แก้วน้ำ' }).first().click();
    await page.getByRole('link', { name: 'gb' }).click(); //Change Language

    await page.getByRole('button', { name: ' Add to cart' }).click();

    const CheckEN2 = await expect(page.getByRole('heading', { name: ' Product successfully added' })).toBeVisible()
    const CheckEN3 = await expect(page.getByLabel('Product successfully added').getByRole('heading', { name: 'Glass' })).toBeVisible()
    const CheckEN4 = await expect(page.getByText('Quantity:')).toBeVisible()
    const CheckEN5 = await expect(page.getByText('There is 1 item in your cart.')).toBeVisible()
    const CheckEN6 = await expect(page.getByText('Subtotal: ฿')).toBeVisible()
    const CheckEN7 = await expect(page.getByRole('button', { name: 'Continue shopping' })).toBeVisible()
    const CheckEN8 = await expect(page.getByRole('link', { name: ' Proceed to checkout' })).toBeVisible()
  });


  test('TC27', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'แก้วน้ำ' }).first().click();
    await page.getByRole('link', { name: 'th', exact: true }).click(); //Change Language

    await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();

    const CheckTH2 = await expect(page.getByRole('heading', { name: ' สินค้าได้ถูกเพิ่มไปยังตะกร้าสินค้าของคุณแล้ว' })).toBeVisible()
    const CheckTH3 = await expect(page.getByLabel('สินค้าได้ถูกเพิ่มไปยังตะกร้าสินค้าของคุณแล้ว').getByRole('heading', { name: 'แก้วน้ำ' })).toBeVisible()
    const CheckTH4 = await expect(page.getByText('จำนวน:')).toBeVisible()
    const CheckTH5 = await expect(page.getByText('มี 1 รายการในตะกร้าของคุณ')).toBeVisible()
    const CheckTH6 = await expect(page.getByText('ยอดรวม: ฿')).toBeVisible()
    const CheckTH7 = await expect(page.getByRole('button', { name: 'ซื้อสินค้าต่อ' })).toBeVisible()
    const CheckTH8 = await expect(page.getByRole('link', { name: ' ทำรายการชำระเงิน'})).toBeVisible()
  });


  test('TC28', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'แก้วน้ำ' }).first().click();
    await page.getByRole('link', { name: 'id' }).click(); //Change Language

    await page.getByRole('button', { name: ' Beli' }).click();

    const CheckTH2 = await expect(page.getByRole('heading', { name: ' Produk berhasil ditambahkan' })).toBeVisible()
    const CheckTH3 = await expect(page.getByLabel('Produk berhasil ditambahkan').getByRole('heading', { name: 'kaca' })).toBeVisible()
    const CheckTH4 = await expect(page.getByText('Jumlah:')).toBeVisible()
    const CheckTH5 = await expect(page.getByText('Ada 1 iBarang di keranjang')).toBeVisible()
    const CheckTH6 = await expect(page.getByText('Jumlah keseluruhan: ฿')).toBeVisible()
    const CheckTH7 = await expect(page.getByRole('button', { name: 'Belanja Lagi' })).toBeVisible()
    const CheckTH8 = await expect(page.getByRole('link', { name: ' Proses pembayaran' })).toBeVisible()
  });


  test('TC29', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'แก้วน้ำ' }).first().click();
    await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
    await page.getByRole('button', { name: 'ซื้อสินค้าต่อ' }).click();
    await page.getByRole('link', { name: 'หน้าหลัก' }).click();
    await page.getByRole('link', { name: 'กระเป๋าผ้า' }).first().click();
    await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
    await page.getByLabel('ปิด').click();
    await page.getByLabel('ลิงก์ตะกร้าสินค้าที่มีผลิตภัณฑ์ 2 รายการ').click();

    const CheckTH1 = await expect(page.getByRole('heading', { name: 'ตะกร้าสินค้า' })).toBeVisible()
    const CheckTH2 = await expect(page.getByRole('link', { name: 'แก้วน้ำ' })).toBeVisible()
    const CheckTH3 = await expect(page.getByRole('link', { name: 'กระเป๋าผ้า' })).toBeVisible()
    const CheckTH4 = await expect(page.getByText('2 รายการ')).toBeVisible()
    const CheckTH5 = await expect(page.getByText('รวมทั้งสิ้น (รวมภาษี)')).toBeVisible()
    const CheckTH6 = await expect(page.getByRole('link', { name: 'ทำรายการชำระเงิน' })).toBeVisible()
    const CheckTH7 = await expect(page.getByText('นโยบายความปลอดภัย')).toBeVisible()
    const CheckTH8 = await expect(page.getByText('นโยบายการจัดส่ง')).toBeVisible()
    const CheckTH9 = await expect(page.getByText('นโยบายการคืนสินค้า')).toBeVisible()

    await page.getByRole('link', { name: 'gb' }).click(); //Change Language

    const CheckEN1 = await expect(page.getByRole('heading', { name: 'Shopping Cart' })).toBeVisible()
    const CheckEN2 = await expect(page.getByRole('link', { name: 'Glass' })).toBeVisible()
    const CheckEN3 = await expect(page.getByRole('link', { name: 'Cloth bag' })).toBeVisible()
    const CheckEN4 = await expect(page.getByText('2 items')).toBeVisible()
    const CheckEN5 = await expect(page.getByText('Total (tax incl.)')).toBeVisible()
    const CheckEN6 = await expect(page.getByRole('link', { name: 'Proceed to checkout' })).toBeVisible()
    const CheckEN7 = await expect(page.getByText('Security policy')).toBeVisible()
    const CheckEN8 = await expect(page.getByText('Delivery policy')).toBeVisible()
    const CheckEN9 = await expect(page.getByText('Return policy')).toBeVisible()
  });


  test('TC30', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'แก้วน้ำ' }).first().click();
    await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
    await page.getByRole('button', { name: 'ซื้อสินค้าต่อ' }).click();
    await page.getByRole('link', { name: 'หน้าหลัก' }).click();
    await page.getByRole('link', { name: 'กระเป๋าผ้า' }).first().click();
    await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
    await page.getByLabel('ปิด').click();
    await page.getByLabel('ลิงก์ตะกร้าสินค้าที่มีผลิตภัณฑ์ 2 รายการ').click();

    const CheckTH1 = await expect(page.getByRole('heading', { name: 'ตะกร้าสินค้า' })).toBeVisible()
    const CheckTH2 = await expect(page.getByRole('link', { name: 'แก้วน้ำ' })).toBeVisible()
    const CheckTH3 = await expect(page.getByRole('link', { name: 'กระเป๋าผ้า' })).toBeVisible()
    const CheckTH4 = await expect(page.getByText('2 รายการ')).toBeVisible()
    const CheckTH5 = await expect(page.getByText('รวมทั้งสิ้น (รวมภาษี)')).toBeVisible()
    const CheckTH6 = await expect(page.getByRole('link', { name: 'ทำรายการชำระเงิน' })).toBeVisible()
    const CheckTH7 = await expect(page.getByText('นโยบายความปลอดภัย')).toBeVisible()
    const CheckTH8 = await expect(page.getByText('นโยบายการจัดส่ง')).toBeVisible()
    const CheckTH9 = await expect(page.getByText('นโยบายการคืนสินค้า')).toBeVisible()

    await page.getByRole('link', { name: 'th', exact: true }).click(); //Change Language

    const CheckTHN1 = await expect(page.getByRole('heading', { name: 'ตะกร้าสินค้า' })).toBeVisible()
    const CheckTHN2 = await expect(page.getByRole('link', { name: 'แก้วน้ำ' })).toBeVisible()
    const CheckTHN3 = await expect(page.getByRole('link', { name: 'กระเป๋าผ้า' })).toBeVisible()
    const CheckTHN4 = await expect(page.getByText('2 รายการ')).toBeVisible()
    const CheckTHN5 = await expect(page.getByText('รวมทั้งสิ้น (รวมภาษี)')).toBeVisible()
    const CheckTHN6 = await expect(page.getByRole('link', { name: 'ทำรายการชำระเงิน' })).toBeVisible()
    const CheckTHN7 = await expect(page.getByText('นโยบายความปลอดภัย')).toBeVisible()
    const CheckTHN8 = await expect(page.getByText('นโยบายการจัดส่ง')).toBeVisible()
    const CheckTHN9 = await expect(page.getByText('นโยบายการคืนสินค้า')).toBeVisible()
  });


  test('TC31', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'แก้วน้ำ' }).first().click();
    await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
    await page.getByRole('button', { name: 'ซื้อสินค้าต่อ' }).click();
    await page.getByRole('link', { name: 'หน้าหลัก' }).click();
    await page.getByRole('link', { name: 'กระเป๋าผ้า' }).first().click();
    await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
    await page.getByLabel('ปิด').click();
    await page.getByLabel('ลิงก์ตะกร้าสินค้าที่มีผลิตภัณฑ์ 2 รายการ').click();

    const CheckTH1 = await expect(page.getByRole('heading', { name: 'ตะกร้าสินค้า' })).toBeVisible()
    const CheckTH2 = await expect(page.getByRole('link', { name: 'แก้วน้ำ' })).toBeVisible()
    const CheckTH3 = await expect(page.getByRole('link', { name: 'กระเป๋าผ้า' })).toBeVisible()
    const CheckTH4 = await expect(page.getByText('2 รายการ')).toBeVisible()
    const CheckTH5 = await expect(page.getByText('รวมทั้งสิ้น (รวมภาษี)')).toBeVisible()
    const CheckTH6 = await expect(page.getByRole('link', { name: 'ทำรายการชำระเงิน' })).toBeVisible()
    const CheckTH7 = await expect(page.getByText('นโยบายความปลอดภัย')).toBeVisible()
    const CheckTH8 = await expect(page.getByText('นโยบายการจัดส่ง')).toBeVisible()
    const CheckTH9 = await expect(page.getByText('นโยบายการคืนสินค้า')).toBeVisible()

    await page.getByRole('link', { name: 'id' }).click(); //Change Language

    const CheckTHN1 = await expect(page.getByRole('heading', { name: 'Troli Belanja' })).toBeVisible()
    const CheckTHN2 = await expect(page.getByRole('link', { name: 'kaca' })).toBeVisible()
    const CheckTHN3 = await expect(page.getByRole('link', { name: 'Tas kain' })).toBeVisible()
    const CheckTHN4 = await expect(page.getByText('iBarang')).toBeVisible()
    const CheckTHN5 = await expect(page.getByText('Jumlah (Termasuk pajak)')).toBeVisible()
    const CheckTHN6 = await expect(page.getByRole('link', { name: 'Proses pembayaran' })).toBeVisible()
    const CheckTHN7 = await expect(page.getByText('Kebijakan keamanan')).toBeVisible()
    const CheckTHN8 = await expect(page.getByText('Kebijakan pengiriman')).toBeVisible()
    const CheckTHN9 = await expect(page.getByText('Kebijakan pengembalian')).toBeVisible()
  });


  test('TC32', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByText('  อุปกรณ์เสริม',{exact: true}).hover();
    await page.getByRole('link', { name: 'เครื่องเขียน' }).click();
    const CheckTH1 = await expect(page.getByRole('link', { name: 'เครื่องเขียน' })).toBeVisible()
    const CheckTH2 = await expect(page.getByText('ผู้จัดหาสินค้า', { exact: true })).toBeVisible()
    const CheckTH3 = await expect(page.getByText('ไม่มีผู้จัดหาสินค้า')).toBeVisible()
    const CheckTH4 = await expect(page.getByRole('link', { name: 'แบรนด์' })).toBeVisible()

    const CheckTH5 = await expect(page.getByText('เรียงตาม:')).toBeVisible()
    await page.getByLabel('จัดเรียงตามการเลือก').click();
    const CheckTHN5 = await expect(page.getByRole('link', { name: 'สิ่งที่เกี่ยวข้อง' })).toBeVisible()
    const CheckTHN6 = await expect(page.getByRole('link', { name: 'ตามชื่อ ก ถึง ฮ' })).toBeVisible()
    const CheckTHN7 = await expect(page.getByRole('link', { name: 'ตามชื่อ ฮ ถึง ก' })).toBeVisible()
    const CheckTHN8 = await expect(page.getByRole('link', { name: 'ราคา : จากน้อยไปมาก' })).toBeVisible()
    const CheckTHN9 = await expect(page.getByRole('link', { name: 'ราคา: จากมากไปน้อย' })).toBeVisible()

    await page.getByRole('link', { name: 'gb' }).click(); //Change Language

    const CheckEN1 = await expect(page.getByRole('link', { name: 'Stationery' })).toBeVisible()
    const CheckEN2 = await expect(page.getByText('Suppliers', { exact: true })).toBeVisible()
    const CheckEN3 = await expect(page.getByText('No supplier')).toBeVisible()
    const CheckEN4 = await expect(page.getByRole('link', { name: 'Brands' })).toBeVisible()
    
    const CheckEN5 = await expect(page.getByText('Sort by:')).toBeVisible()
    await page.getByLabel('Sort by selection').click();
    const CheckENN5 = await expect(page.getByRole('link', { name: 'Relevance' })).toBeVisible()
    const CheckEN6 = await expect(page.getByRole('link', { name: 'Name, A to Z' })).toBeVisible()
    const CheckEN7 = await expect(page.getByRole('link', { name: 'Name, Z to A' })).toBeVisible()
    const CheckEN8 = await expect(page.getByRole('link', { name: 'Price, low to high' })).toBeVisible()
    const CheckEN9 = await expect(page.getByRole('link', { name: 'Price, high to low' })).toBeVisible()
  });


  test('TC33', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByText('  อุปกรณ์เสริม',{exact: true}).hover();
    await page.getByRole('link', { name: 'เครื่องเขียน' }).click();
    const CheckTHN1 = await expect(page.getByRole('link', { name: 'เครื่องเขียน' })).toBeVisible()
    const CheckTHN2 = await expect(page.getByText('ผู้จัดหาสินค้า', { exact: true })).toBeVisible()
    const CheckTHN3 = await expect(page.getByText('ไม่มีผู้จัดหาสินค้า')).toBeVisible()
    const CheckTHN4 = await expect(page.getByRole('link', { name: 'แบรนด์' })).toBeVisible()

    const CheckTHN5 = await expect(page.getByText('เรียงตาม:')).toBeVisible()
    await page.getByLabel('จัดเรียงตามการเลือก').click();
    const CheckTHN6 = await expect(page.getByRole('link', { name: 'สิ่งที่เกี่ยวข้อง' })).toBeVisible()
    const CheckTHN7 = await expect(page.getByRole('link', { name: 'ตามชื่อ ก ถึง ฮ' })).toBeVisible()
    const CheckTHN8 = await expect(page.getByRole('link', { name: 'ตามชื่อ ฮ ถึง ก' })).toBeVisible()
    const CheckTHN9 = await expect(page.getByRole('link', { name: 'ราคา : จากน้อยไปมาก' })).toBeVisible()
    const CheckTHN10 = await expect(page.getByRole('link', { name: 'ราคา: จากมากไปน้อย' })).toBeVisible()

    await page.getByRole('link', { name: 'th', exact: true }).click(); //Change Language

    const CheckTH1 = await expect(page.getByRole('link', { name: 'เครื่องเขียน' })).toBeVisible()
    const CheckTH2 = await expect(page.getByText('ผู้จัดหาสินค้า', { exact: true })).toBeVisible()
    const CheckTH3 = await expect(page.getByText('ไม่มีผู้จัดหาสินค้า')).toBeVisible()
    const CheckTH4 = await expect(page.getByRole('link', { name: 'แบรนด์' })).toBeVisible()

    const CheckTH5 = await expect(page.getByText('เรียงตาม:')).toBeVisible()
    await page.getByLabel('จัดเรียงตามการเลือก').click();
    const CheckTH6 = await expect(page.getByRole('link', { name: 'สิ่งที่เกี่ยวข้อง' })).toBeVisible()
    const CheckTH7 = await expect(page.getByRole('link', { name: 'ตามชื่อ ก ถึง ฮ' })).toBeVisible()
    const CheckTH8 = await expect(page.getByRole('link', { name: 'ตามชื่อ ฮ ถึง ก' })).toBeVisible()
    const CheckTH9 = await expect(page.getByRole('link', { name: 'ราคา : จากน้อยไปมาก' })).toBeVisible()
    const CheckTH10 = await expect(page.getByRole('link', { name: 'ราคา: จากมากไปน้อย' })).toBeVisible()
  });


  test('TC34', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByText('  อุปกรณ์เสริม',{exact: true}).hover();
    await page.getByRole('link', { name: 'เครื่องเขียน' }).click();
    const CheckTHN1 = await expect(page.getByRole('link', { name: 'เครื่องเขียน' })).toBeVisible()
    const CheckTHN2 = await expect(page.getByText('ผู้จัดหาสินค้า', { exact: true })).toBeVisible()
    const CheckTHN3 = await expect(page.getByText('ไม่มีผู้จัดหาสินค้า')).toBeVisible()
    const CheckTHN4 = await expect(page.getByRole('link', { name: 'แบรนด์' })).toBeVisible()

    const CheckTH5 = await expect(page.getByText('เรียงตาม:')).toBeVisible()
    await page.getByLabel('จัดเรียงตามการเลือก').click();
    const CheckTH6 = await expect(page.getByRole('link', { name: 'สิ่งที่เกี่ยวข้อง' })).toBeVisible()
    const CheckTH7 = await expect(page.getByRole('link', { name: 'ตามชื่อ ก ถึง ฮ' })).toBeVisible()
    const CheckTH8 = await expect(page.getByRole('link', { name: 'ตามชื่อ ฮ ถึง ก' })).toBeVisible()
    const CheckTH9 = await expect(page.getByRole('link', { name: 'ราคา : จากน้อยไปมาก' })).toBeVisible()
    const CheckTH10 = await expect(page.getByRole('link', { name: 'ราคา: จากมากไปน้อย' })).toBeVisible()

    await page.getByRole('link', { name: 'id' }).click(); //Change Language

    const CheckTHNN1 = await expect(page.getByRole('link', { name: 'Alat tulis' })).toBeVisible()
    const CheckTHNN2 = await expect(page.getByText('Supplier', { exact: true })).toBeVisible()
    const CheckTHNN3 = await expect(page.getByText('Tidak ada supplier')).toBeVisible()
    const CheckTHNN4 = await expect(page.getByRole('link', { name: 'merek' })).toBeVisible()

    const CheckID5 = await expect(page.getByText('Sortir menurut:')).toBeVisible()
    await page.getByLabel('Urutkan berdasarkan pilihan').click();
    const CheckID6 = await expect(page.getByRole('link', { name: 'Relevansi' })).toBeVisible()
    const CheckID7 = await expect(page.getByRole('link', { name: 'Nama, A ke Z' })).toBeVisible()
    const CheckID8 = await expect(page.getByRole('link', { name: 'Nama, Z ke A' })).toBeVisible()
    const CheckID9 = await expect(page.getByRole('link', { name: 'Harga, Rendah ke Tinggi' })).toBeVisible()
    const CheckID10 = await expect(page.getByRole('link', { name: 'Harga, Tinggi ke Rendah' })).toBeVisible()
  });



  // --------------------------------------------------------------------invalid--------------------------------------------------------------------

  test('TC35', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const checkTH2 = await expect(page.getByText('  อุปกรณ์เสริม',{exact: true})).toBeVisible()
    await page.getByRole('link', { name: 'id' }).click(); //Change Language
    const CheckID2 = await expect(page.getByText('  Accessories', { exact: true })).toBeVisible()
  });


  test('TC36', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    const CheckTH1 = await expect(page.getByRole('heading', { name: 'แก้วน้ำ' }).first()).toBeVisible()
    await page.getByRole('link', { name: 'แก้วน้ำ' }).first().hover();
    const checkTH1 = await expect(page.locator('.quick-view', { name: 'เปิดหน้าต่างต่อ' }).first()).toBeVisible()

    await page.getByRole('link', { name: 'gb' }).click(); //Change Language

    const CheckEN1 = await expect(page.getByRole('heading', { name: 'แก้วน้ำ' }).first()).toBeVisible()
    await page.getByRole('link', { name: 'Glass' }).first().hover();
    const checkEN1 = await expect(page.locator('.quick-view', { name: 'เปิดหน้าต่างต่อ' }).first()).toBeVisible()
  });


  test('TC37', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'แก้วน้ำ' }).first().click();

    const checkTH1 = await expect(page.getByRole('heading', { name: 'แก้วน้ำ' })).toBeVisible()
    const checkTH2 = await expect(page.getByText('รวมภาษีแล้ว')).toBeVisible()
    const checkTH3 = await expect(page.getByText('จำนวน')).toBeVisible()
    const checkTH4 = await expect(page.getByRole('button', { name: ' หยิบใส่ตะกร้า' })).toBeVisible()

    await page.getByRole('link', { name: 'th', exact: true }).click(); //Change Language

    const checkEN1 = await expect(page.getByRole('heading', { name: 'Glass' })).toBeVisible()
    const checkEN2 = await expect(page.getByText('Tax included')).toBeVisible()
    const checkEN3 = await expect(page.getByText('Quantity')).toBeVisible()
    const checkEN4 = await expect(page.getByRole('button', { name: ' Add to cart' })).toBeVisible()
  });


  test('TC38', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'gb' }).click(); //Change Language
    await page.getByText('Glass ฿').first().hover();
    const checkCur = await page.getByText('£89.00').first().toBeVisible()
  });


