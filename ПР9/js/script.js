"use strict"


let username = prompt("������� �����:");

if (username === "�����") {
    let password = prompt("������� ������:");

    if (password === "� �������") {
        alert("������������!");
    } else if (password === null || password === "") {
        alert("��������");
    } else {
        alert("�������� ������");
    }
} else if (username === null || username === "") {
    alert("��������");
} else {
    alert("� ��� �� ����");
}
