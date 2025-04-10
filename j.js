const menuData = {
    page1: [
      { name: 'ปลาทอดราดน้ำปลา (Fried Fish with Fish Sauce)', price: 120 },
      { name: 'ต้มยำทะเล (Seafood Tom Yum)', price: 120 },
      { name: 'ต้มจืดเต้าหู้หมูสับ (Tofu and Minced Pork Soup)', price: 90 },
      { name: 'ปลานึ่งมะนาว (Steamed Fish with Lemon)', price: 140 },
      { name: 'หมูมะนาว (Pork with Lime)', price: 120 },
      { name: 'กุ้งแช่น้ำปลา (Shrimp in Fish Sauce)', price: 120 },
      { name: 'ข้าวผัดพริกแกงหมู (Fried Rice with Pork Curry Paste)', price: 50 },
      { name: 'ข้าวผัดทะเล (Seafood Fried Rice)', price: 70 },
      { name: 'ข้าวผัดผงกะหรี่ (Curry Powder Fried Rice)', price: 60 },
      { name: 'ข้าวผัดพริกเกลือ (Fried Rice with Chili and Salt)', price: 60 },
      { name: 'ข้าวผัดผักรวม (Mixed Vegetable Fried Rice)', price: 60 },
      { name: 'ผัดฉ่า (Stir-fried Spicy Meat)', price: 100 }
    ],
    page2: [
      { name: 'ข้าวไข่เจียว (Egg Omelette)', price: 40 },
      { name: 'ผัดกะเพราหมูสับ (Stir-fried Pork with Basil)', price: 50 },
      { name: 'ผัดกะเพราไก่ (Stir-fried Chicken with Basil)', price: 50 },
      { name: 'ผัดกะเพรากุ้ง (Stir-fried Shrimp with Basil)', price: 60 },
      { name: 'ผัดกะเพราปลาหมึก (Stir-fried Squid with Basil)', price: 60 },
      { name: 'ผัดกะเพราทะเล (Stir-fried Seafood with Basil)', price: 70 },
      { name: 'ข้าวผัดไข่ (Egg Fried Rice)', price: 40 },
      { name: 'ข้าวผัดหมู (Pork Fried Rice)', price: 50 },
      { name: 'ข้าวผัดกุ้ง (Shrimp Fried Rice)', price: 60 },
      { name: 'ข้าวผัดปลาหมึก (Squid Fried Rice)', price: 60 },
      { name: 'ข้าวผัดทะเล (Seafood Fried Rice)', price: 70 },
      { name: 'ข้าวหมูทอด (Fried Pork Rice)', price: 60 }
    ],
    page3: [
      { name: 'หมูทอดกรอบ (Crispy Fried Pork)', price: 70 },
      { name: 'กุ้งทอดกระเทียม (Garlic Fried Shrimp)', price: 100 },
      { name: 'หมึกทอดกระเทียม (Garlic Fried Squid)', price: 100 },
      { name: 'ปีกไก่ทอด (Fried Chicken Wings)', price: 80 },
      { name: 'ต้มยำทะเล (Seafood Tom Yum)', price: 120 },
      { name: 'ยำมาม่าหมูสับ (Spicy Instant Noodles with Minced Pork)', price: 100 },
      { name: 'ยำทะเล (Seafood Salad)', price: 100 },
      { name: 'ยำวุ้นเส้น (Glass Noodle Salad)', price: 90 },
      { name: 'ต้มจืดเต้าหู้หมูสับ (Tofu and Minced Pork Soup)', price: 100 }
    ],
    page3Special: [
      { name: 'ข้าว (Rice)', price: 10 },
      { name: 'ไข่ดาว (Fried Egg)', price: 10 },
      { name: 'ไข่เจียว (Omelette)', price: 10 },
      { name: 'เพิ่มกับ (Add Side Dish)', price: 10 }
    ]
  };
  
  function loadPage(pageNumber) {
    const menu = menuData[`page${pageNumber}`];
    const title = pageNumber === 1 ? 'เมนูแนะนำ (Recommended Menu)' :
                  pageNumber === 2 ? 'อาหารจานเดียว (Single Dish Menu)' :
                  'ต้ม/ทอด/ยำ (Soup/Fried/Salad)';
    document.getElementById('page-title').textContent = title;
  
    let tableContent = `
      <table>
        <thead>
          <tr>
            <th>เมนู (Menu)</th>
            <th>ราคา (บาท) (Price)</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    menu.forEach(item => {
      tableContent += `
        <tr>
          <td>${item.name}</td>
          <td>${item.price}</td>
        </tr>
      `;
    });
  
    tableContent += `
        </tbody>
      </table>
    `;
  
    document.getElementById('menu-list').innerHTML = tableContent;
  
    if (pageNumber === 3) {
      let specialMenuContent = `
        <h2>พิเศษ (Special)</h2>
        <table>
          <thead>
            <tr>
              <th>เมนู (Menu)</th>
              <th>ราคา (บาท) (Price)</th>
            </tr>
          </thead>
          <tbody>
      `;
  
      menuData.page3Special.forEach(item => {
        specialMenuContent += `
          <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
          </tr>
        `;
      });
  
      specialMenuContent += `
          </tbody>
        </table>
      `;
  
      document.getElementById('menu-list').innerHTML += specialMenuContent;
    }
  
    const links = document.querySelectorAll('.pagination a');
    links.forEach(link => link.classList.remove('active'));
    links[pageNumber - 1].classList.add('active');
  }
  
  // โหลดหน้าแรกเมื่อเริ่มต้น
  loadPage(1);
  